import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Lightformer, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const HELMET_URL = "/models/helmet.glb";

// Central hero model: a floating sci-fi helmet that gently follows the pointer.
function Helmet() {
  const ref = useRef();
  const { scene } = useGLTF(HELMET_URL);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.12;
    // subtle pointer parallax
    const px = 1.6 + (state.pointer.x * viewport.width) / 26;
    const py = 0.2 + (state.pointer.y * viewport.height) / 26;
    ref.current.position.x += (px - ref.current.position.x) * 0.05;
    ref.current.position.y += (py - ref.current.position.y) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <primitive
        ref={ref}
        object={scene}
        position={[1.6, 0.2, 0]}
        scale={1.7}
      />
    </Float>
  );
}

// Small floating geometric accents.
function Shapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.8}>
        <mesh position={[-3.2, 1.4, -1]} scale={0.55}>
          <torusGeometry args={[1, 0.35, 16, 48]} />
          <meshStandardMaterial
            color="#d946ef"
            emissive="#701a75"
            emissiveIntensity={0.5}
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={1.8} floatIntensity={2.2}>
        <mesh position={[-2.4, -1.8, 0.5]} scale={0.5}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1e3a8a"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[3.6, -1.6, -1]} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#155e75"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </>
  );
}

// Slowly drifting star/particle field.
function Particles({ count = 900 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    // Deterministic Fibonacci-sphere distribution (no RNG → pure & stable),
    // with a hashed radius so the field has some depth variation.
    const arr = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const frac = ((i * 0.6180339887) % 1); // hashed 0..1
      const r = 6 + frac * 8;
      arr[i * 3] = Math.cos(theta) * radiusAtY * r;
      arr[i * 3 + 1] = y * r;
      arr[i * 3 + 2] = Math.sin(theta) * radiusAtY * r;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#67e8f9"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D() {
  // R3F measures the canvas via ResizeObserver, which occasionally doesn't
  // fire its initial callback for a canvas under a position:fixed parent,
  // leaving the buffer at the default 300x150. Nudge a resize once on mount.
  useEffect(() => {
    const nudge = () => window.dispatchEvent(new Event("resize"));
    const timers = [50, 250, 600].map((ms) => setTimeout(nudge, ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
      }}
    >
      <Canvas
      // offsetSize avoids a 0-size canvas when the parent is position:fixed
      // (react-use-measure returns 0 via getBoundingClientRect there).
      resize={{ offsetSize: true }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 45 }}
    >
      <color attach="background" args={["#06070d"]} />
      <fog attach="fog" args={["#06070d", 8, 20]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#a5f3fc" />
      <pointLight position={[-6, -3, -2]} intensity={40} color="#d946ef" />
      <pointLight position={[6, 3, 4]} intensity={30} color="#3b82f6" />

      <Suspense fallback={null}>
        <Helmet />
        <Shapes />
        <Particles />
        {/* Procedural environment (no external HDR) so the metallic helmet
            picks up colored reflections that match the theme. */}
        <Environment resolution={256}>
          <Lightformer
            intensity={2}
            color="#a5f3fc"
            position={[0, 3, 4]}
            scale={[8, 4, 1]}
          />
          <Lightformer
            intensity={1.5}
            color="#d946ef"
            position={[-4, -1, 2]}
            scale={[6, 6, 1]}
          />
          <Lightformer
            intensity={1.2}
            color="#3b82f6"
            position={[5, 2, -3]}
            scale={[6, 6, 1]}
          />
        </Environment>
      </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(HELMET_URL);
