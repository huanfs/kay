import React, { useState } from "react";

import Result from "@atoms/result.jsx";

import styled from "styled-components";

const StyledRoulette = styled.section`
  width: 350px;
  height: 350px;
  min-width: 350px;
  min-height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:-100px;

  & div {
    width: 40px;
    height: 80px;
    background: var(--soft-silver);
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    position: absolute;
    left:1em;
    top:1em;
    transform: rotate(130deg);
    z-index: 10;
  }

  & img {
    width: 100%;
    height: 100%;
    transition: transform 4s cubic-bezier(0.2, 0.8, 0.3, 1);
    cursor: pointer;
  }
`;

function Roulette() {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [ isSpinning, setIsSpinning] = useState(false);

  const sections = ["Santa Lolla", "Sephora", "Victoria Secrets", "Carmed"]; // suas 4 partes da imagem (em ordem horária)

  function spinRoulette() {
    if(isSpinning) return;
    setIsSpinning(true);
    const randomSection = Math.floor(Math.random() * 4); // 0–3
    const extraSpins = 3 * 360; // giros completos
    const newRotation = rotation + extraSpins + randomSection * 90;

    setRotation(newRotation);

    // aguarda a animação (4s) e define o resultado
    setTimeout(() => {
      const normalized = (newRotation % 360 + 360) % 360;
      const index = Math.floor(normalized / 90);
      const value = sections[(4 - index) % 4]; // ajuste p/ alinhar à seta no topo esquerdo
      setResult(value);
      console.log("Parou em:", value);
    }, 4000);
  }

  return (
    <StyledRoulette>
      <div />
      <img
        src="/media/roulette.png"
        alt="roulette"
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={spinRoulette}
      />
      {
        result && <Result result={result}/>
      }
    </StyledRoulette>
  );
}

export default Roulette;
