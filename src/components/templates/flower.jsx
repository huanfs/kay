import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import SecondaryButton from "@atoms/secondaryButton.jsx";
import styled from "styled-components";

// Section ocupando a tela inteira
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  & button{
    position:absolute;
    bottom:3em;
    left:50%;
    transform:translateX(-50%);
  }
`;

function FlowerBouquetModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />; // Reduzi scale de 1.5 para 1
}

function Flower() {
  return (
    <Section>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{
          antialias: true,
          powerPreference: "low-power",
          failIfMajorPerformanceCaveat: false,
          webgl2: false, // força WebGL 1.0
        }}
      >
        {/* Luzes simples para economia de GPU */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />

        {/* Suspense com fallback simples */}
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <FlowerBouquetModel modelPath="/Roses.glb" />
        </Suspense>

        {/* Controles simplificados */}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
      <SecondaryButton value="voltar"/>
    </Section>
  );
}

export default Flower;
