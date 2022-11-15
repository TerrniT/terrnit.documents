import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html color="black" center>
      {progress} %
    </Html>
  );
};

const Scene = ({ model }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0] }}>
      <Suspense fallback={<Loader />}>

        <pointLight position={[5, 5, 1]} />
        <ambientLight intensity={0.55} />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.1} />
        {model}
      </Suspense>
    </Canvas>
  );
};
export default Scene;
