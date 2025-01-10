'use client';
/*
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

function MyModel() {
  const gltf = useGLTF("/models/scene.glb"); // Einfacher Zugriff über `public`
  
  // Scale das Modell
  return <primitive object={gltf.scene} scale={[0.5, 0.5, 0.5]} />;
}

export default function Home() {
  return (
    <section>
      <Button>Click me!</Button>
      <Switch />
  
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Willkommen auf meinem Portfolio!
        </h1>
        <p className="text-lg text-gray-600">
          Ich studiere Technisches Design im 5. Semester
        </p>
      </div>
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          3D-Projekt
        </h2>
        <div className="w-full h-96 border rounded-lg shadow-lg bg-white">
          <Canvas
            camera={{
              position: [100, 150, 100], // Standardposition der Kamera (etwas herausgezoomt)
              fov: 75, // Field of View (Sichtfeld)
            }}
          >
            <MyModel />
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls
              enableZoom={true} // Zoom aktivieren
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}*/

'use client';

import * as THREE from 'three';
import { useLayoutEffect, useRef, useState } from 'react';
import { Canvas, applyProps, useFrame } from '@react-three/fiber';
import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  useGLTF,
  OrbitControls,
} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina';

// Funktion für das Porsche-Modell
function Porsche(props: any) {
  const { scene, nodes, materials } = useGLTF('/models/911-transformed.glb');

  useLayoutEffect(() => {
    // Aktiviert Schatten für das Modell
    Object.values(nodes).forEach((node: any) => {
      if (node.isMesh) {
        node.receiveShadow = true;
        node.castShadow = true;
      }
    });

    // Materialeigenschaften anwenden
    if (materials) {
      applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] });
      applyProps(materials.window, { color: 'black', roughness: 0, clearcoat: 0.1 });
      applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 });
      applyProps(materials.paint, { envMapIntensity: 2, roughness: 0.45, metalness: 0.8, color: '#555' });
    }
  }, [nodes, materials]);

  return <primitive object={scene} {...props} />;
}

// Funktion für die Kamerasteuerung
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
}

// Funktion für die Lichtquellen
function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.z += delta * 10;
      if (group.current.position.z > 20) {
        group.current.position.z = -60;
      }
    }
  });

  return (
    <>
      {/* Deckenbeleuchtung */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Seitenbeleuchtung */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      {/* Akzentbeleuchtung */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      {/* Hintergrund */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        </LayerMaterial>
      </mesh>
    </>
  );
}

// Hauptkomponente
export default function Home() {
  const [degraded, degrade] = useState(false);

  return (
    <section className="h-screen">
      <Canvas
        shadows
        camera={{ position: [5, 0, 15], fov: 30 }}
        onCreated={(state) => (state.gl.shadowMap.enabled = true)}
      >
        {/* Hauptlichtquellen */}
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        
        {/* Porsche-Modell */}
        <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
        
        {/* Accumulative Shadows */}
        <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>

        {/* Performance Monitor */}
        <PerformanceMonitor onDecline={() => degrade(true)} />

        {/* Environment und Lichtformer */}
        <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
          <Lightformers />
        </Environment>

        {/* Kamera-Rig */}
        <CameraRig />

        {/* Orbit Controls */}
        <OrbitControls />
      </Canvas>
    </section>
  );
}