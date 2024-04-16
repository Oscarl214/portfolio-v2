'use client';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { ambientLight } from 'three';
export default function index() {
  return (
    <div className={styles.main}>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.z += delta * 0.5;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={'green'} />
    </mesh>
  );
}
