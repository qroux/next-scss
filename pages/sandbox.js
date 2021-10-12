// import dynamic from 'next/dynamic';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics } from '@react-three/cannon';
// import Box from '../components/3d/SpinningBox';
// import {
//   softShadows,
//   OrbitControls,
//   useProgress,
//   Html,
// } from '@react-three/drei';

// const Banana = dynamic(() => import('../components/3d/Banana'));

// softShadows();

// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

export default function sandbox() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid red',
        boxSizing: 'border-box',
        minHeight: '70vh',
      }}>
      {/* <Canvas
        shadows
        style={{ height: '60rem', width: '100%' }}
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Suspense fallback={<Loader />}>
          <Physics>
            <group>
              <Banana />
              <Box position={[-2, 1, -5]} speed={6} />
          <Box
            position={[0, 1, 0]}
            size={[2, 2, 1]}
            color='royalblue'
            speed={2}
            reverse={true}
          />
              <Box position={[5, 1, -2]} color='greenyellow' speed={20} />

              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}>
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
                <meshStandardMaterial attach='material' color='lightgrey' />
              </mesh>
            </group>
          </Physics>
        </Suspense>
        <OrbitControls />
      </Canvas> */}
    </div>
  );
}
