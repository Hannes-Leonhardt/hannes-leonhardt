'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Willkommen auf meinem Portfolio!
        </h1>
        <p className="text-lg text-gray-600">
          Ich studiere Technisches Design im 5. Semester
        </p>
      </div>
      {/* 3D-Cube Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          3D-Projekt
        </h2>
        <div className="w-full h-96 border rounded-lg shadow-lg bg-white">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh rotation={[0.4, 0.2, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
}