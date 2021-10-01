import { useBox } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';

export default function Box() {
  const { viewport } = useThree();
  const length =
    viewport.width < viewport.height
      ? viewport.width / 10
      : viewport.height / 5;

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [Math.PI / 3, 0, 0],
  }));

  return (
    <mesh
      ref={ref}
      onClick={() => {
        api.velocity.set(0, 3, 0);
      }}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  );
}
