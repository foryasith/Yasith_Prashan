import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import './BrainVisualization.css';

function BrainModel({ scrollProgress }) {
  const brainRef = useRef();
  
  useFrame(() => {
    if (brainRef.current) {
      // Rotate based on scroll progress (0 to 1)
      brainRef.current.rotation.y = scrollProgress * Math.PI * 2; // Full rotation
      brainRef.current.rotation.x = scrollProgress * Math.PI * 0.5; // Partial tilt
    }
  });

  return (
    <mesh ref={brainRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial 
        color="#00ffff" 
        wireframe 
        transparent 
        opacity={0.8} 
      />
    </mesh>
  );
}

export default function BrainVisualization({ scrollProgress }) {
  return (
    <div className="brain-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BrainModel scrollProgress={scrollProgress} />
        {/* Disable manual controls since we're using scroll */}
        <OrbitControls enabled={false} />
      </Canvas>
    </div>
  );
}