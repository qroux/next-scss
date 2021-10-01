import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

export default function SpinningBox({
  position = [0, 0, 0],
  size = [1, 1, 1],
  color = 'hotpink',
  speed = 1,
}) {
  const meshRef = useRef(null);

  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxBufferGeometry attach='geometry' args={size} />
      <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={speed}
        factor={0.6}
      />
    </mesh>
  );
}
