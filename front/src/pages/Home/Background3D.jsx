import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const mesh = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (mesh.current) {
      // Rotation dynamique
      mesh.current.rotation.y = scroll.offset * Math.PI * 2;
      mesh.current.rotation.x = scroll.offset * Math.PI;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"#3b82f6"} metalness={0.3} roughness={0.2} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <AnimatedSphere />
    </Canvas>
  );
}
