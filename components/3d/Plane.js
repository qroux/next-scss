import { usePlane } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';

export default function Plane() {
  const { viewport } = useThree();
  const length =
    viewport.width > viewport.height ? viewport.width / 2 : viewport.height / 2;

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    scale: [1, 1, 1],
  }));

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach='geometry' args={[length, length]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  );
}
