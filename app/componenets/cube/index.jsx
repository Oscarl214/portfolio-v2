'use client';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ambientLight } from 'three';

import { GLTFLoader } from 'three/examples/jsm/Addons.js';
export default function index() {
  return (
    <div className={styles.main}>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Model />
      </Canvas>
    </div>
  );
}

function Model() {
  const gltf = useLoader(GLTFLoader, '../astro.glb');
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
    // mesh.current.rotation.z += delta * 0.5;
  });

  return <primitive object={gltf.scene} ref={mesh} />;
}
