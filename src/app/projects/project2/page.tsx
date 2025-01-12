'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

function WalkerModel() {
  const { scene, nodes } = useGLTF('/models/walker.glb'); // Load the GLB model

  // Enable shadow casting for all meshes in the model
  Object.values(nodes).forEach((node) => {
    if ((node as Mesh).isMesh) {
      (node as Mesh).castShadow = true;
    }
  });

  return <primitive object={scene} />;
}

export default function Project2Page() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Project 2</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        This project is inspired by Theo Jansen’s Strandbeest, known for their elegant, wind-powered movement. While not wind-driven itself, the walker captures the mechanical ingenuity and organic motion that characterize Jansen’s creations. Designed for a contest, this self-propelled model is constructed using 3D-printed parts, ensuring easy assembly without requiring additional tools. The project highlights creativity, precision, and a deep appreciation for kinetic design.
      </p>

      <div className="w-full h-[1000px] bg-gray-200 rounded-lg overflow-hidden">
        <Canvas shadows camera={{ position: [0, 0.5, 0.5], fov: 50 }}>
          {/* Ambient and Directional Lighting */}
          <ambientLight intensity={2} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048} // Increase shadow map resolution
            shadow-mapSize-height={2048} // Higher resolution for sharper shadows

          />

          {/* Floor */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <shadowMaterial opacity={0.1} />
          </mesh>

          {/* Walker Model */}
          <WalkerModel />

          {/* Orbit Controls */}
          <OrbitControls
            // zoome standardmäßig auf das Modell
            autoRotate
            autoRotateSpeed={0.15}
            minDistance={0.3}
            enablePan={true}
          />
        </Canvas>
      </div>
    </div>
  );
}

// Necessary for GLTFLoader
useGLTF.preload('/models/walker.glb');