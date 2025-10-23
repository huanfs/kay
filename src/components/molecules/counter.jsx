import React from "react";

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
                animation-name:tilt;
                animation-durations:300ms;
            }
    `;

function Counter(){

    const{chance} = useChance();

    return(
        <Count>
            <p>tenativas</p>
            <span>{chance}</span>
        </Count>
    )
};
export default Counter;