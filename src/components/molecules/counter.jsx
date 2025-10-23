import React, {useRef, useEffect} from "react";

import {useChance} from "@store/useChance.js";

import styled from "styled-components";

    const Count = styled.section`
        display:flex;
        align-items:center;
        flex-direction:column;
        gap:1em;

            & p{
                text-transform:uppercase;
                color:var(--soft-silver);
                text-shadow:var(--shadow);
                font-size:30px;
            }

            & span{
                color:var(--champagne);
                text-shadow:var(--shadow);
                font-size:100px;
                font-weight:900;
            }

            & .tilt{
                animation-name:tilt;
                animation-duration:100ms;
            }
    `;

function Counter(){

    const{chance} = useChance();

    const spanRef = useRef(null);

    useEffect(() => {
    if (spanRef.current) {
      spanRef.current.classList.remove("tilt"); // remove a classe
      void spanRef.current.offsetWidth;        // força reflow
      spanRef.current.classList.add("tilt");   // adiciona de novo → animação dispara
    }
  }, [chance]);

    return(
        <Count>
            <p>tenativas</p>
            <span ref={spanRef}>{chance}</span>
        </Count>
    )
};
export default Counter;