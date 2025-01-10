'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/911-transformed.glb"); // Pfad zu deinem Modell
  return <primitive object={gltf.scene} scale={1} />;
}

export default function Home() {
  return (
    <section>
      <h1 className="text-center font-bold text-2xl text-gray-800">
        Willkommen zu meinem 3D-Modell
      </h1>
      <div className="w-full h-[600px] mt-8 bg-gray-100 rounded-lg shadow-md">
        <Canvas>
          {/* Lichtquellen */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          
          {/* Modell */}
          <Model />
          
          {/* Kamera-Steuerung */}
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}