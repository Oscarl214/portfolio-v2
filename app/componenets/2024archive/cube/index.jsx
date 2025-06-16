'use client';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { MeshBasicMaterial } from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ambientLight } from 'three';
import styles from './style.module.scss';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import { useMotionValue } from 'framer-motion';
export default function index() {
  return (
    <div className={styles.main}>
      <Canvas>
        <ambientLight intensity={6} />
        <directionalLight intensity={6} position={[5, 5, 5]} />
        <Model />
      </Canvas>
    </div>
  );
}

function Model() {
  const gltf = useLoader(GLTFLoader, '../animated_earth.glb');
  const mesh = useRef(null);

  useFrame((state, delta) => {
    // mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
    // mesh.current.rotation.z += delta * 0.5;
  });

  return <primitive object={gltf.scene} ref={mesh} scale={[1.5, 1.5, 1.5]} />;
}
