import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

export default function SpinningBox({
  position = [0, 0, 0],
  size = [1, 1, 1],
  color = 'hotpink',
  speed = 1,
  reverse = false,
}) {
  const meshRef = useRef(null);
  const [expand, setExpand] = useState(false);

  useFrame(
    () =>
      (meshRef.current.rotation.x = meshRef.current.rotation.y += reverse
        ? 0.02 * -1
        : 0.01)
  );

  const props = useSpring({
    scale: expand ? 1.4 : 1,
  });

  return (
    <a.mesh
      ref={meshRef}
      position={position}
      castShadow
      onClick={() => setExpand(!expand)}
      scale={props.scale}>
      <boxBufferGeometry attach='geometry' args={size} />
      <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
}
