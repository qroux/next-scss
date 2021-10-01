import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Box from '../components/3d/Box';
import Plane from '../components/3d/Plane';

export default function sandbox() {
  return (
    <div
      style={{
        minHeight: '65vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <group>
          <Physics>
            <Box />
            <Plane />
          </Physics>
        </group>

        {/* <Stars /> */}
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        <ambientLight intensity={0.8} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
