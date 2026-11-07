
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.12;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.current.y * 0.16,
      0.04
    );

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -pointer.current.x * 0.12,
      0.04
    );

    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef} scale={0.68} position={[-0.2, 0, 0]}>
      {/* Metallic centre */}
      <mesh>
        <torusKnotGeometry args={[1, 0.22, 160, 20, 2, 3]} />
        <meshStandardMaterial
          color="#A63850"
          metalness={0.9}
          roughness={0.2}
          emissive="#45101F"
          emissiveIntensity={0.55}
        />
      </mesh>

      {/* Energy core */}
      <mesh scale={0.52}>
        <sphereGeometry args={[1, 40, 40]} />
        <MeshDistortMaterial
          color="#F28A45"
          emissive="#762B43"
          emissiveIntensity={0.7}
          metalness={0.75}
          roughness={0.2}
          distort={0.25}
          speed={1.6}
        />
      </mesh>

      {/* Orange orbit */}
      <mesh rotation={[1.1, 0.3, 0.4]}>
        <torusGeometry args={[1.55, 0.018, 12, 100]} />
        <meshStandardMaterial
          color="#F28A45"
          emissive="#E3424F"
          emissiveIntensity={1.2}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Silver orbit */}
      <mesh rotation={[0.3, 1.2, 0.8]}>
        <torusGeometry args={[1.8, 0.012, 12, 100]} />
        <meshStandardMaterial
          color="#D6D2D0"
          metalness={1}
          roughness={0.3}
        />
      </mesh>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 0.8, 0.2]} scale={0.12}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#F28A45"
            emissive="#E3424F"
            emissiveIntensity={1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-1.8, -1, 0.5]} scale={0.1}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#D6D2D0"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <pointLight position={[3, 3, 4]} intensity={25} color="#F28A45" />
      <pointLight position={[-3, -2, 3]} intensity={20} color="#E3424F" />
      <pointLight position={[0, 4, -3]} intensity={12} color="#FFFFFF" />

      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.15}>
        <FloatingOrb />
      </Float>

      <Sparkles
        count={55}
        scale={5}
        size={1.7}
        speed={0.3}
        opacity={0.55}
        color="#F28A45"
      />

      <Sparkles
        count={25}
        scale={6}
        size={1.2}
        speed={0.2}
        opacity={0.35}
        color="#E3424F"
      />
    </>
  );
}

function Hero3DVisual() {
  return (
    <div className="hero-3d-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.35]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Hero3DVisual;
