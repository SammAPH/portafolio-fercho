import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = () => {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  );
};

const Cubo3D = () => {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default Cubo3D;
