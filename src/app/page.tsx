'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function MyModel() {
  const gltf = useGLTF('/models/911-transformed.glb');
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function Home() {
  return (
    <section className="h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} />
        <MyModel />
        <OrbitControls />
      </Canvas>
    </section>
  );
}