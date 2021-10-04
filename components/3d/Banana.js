import { useGLTF, useProgress, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useBox } from '@react-three/cannon';

function Model({ url }) {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

export default function Banana() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [Math.PI / 3, 0, 0],
  }));

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      onClick={() => api.velocity.set(0, 3, 0)}>
      <Model url={'/banana/scene.gltf'} />
    </mesh>
  );
}
