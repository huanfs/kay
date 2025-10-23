import React from "react";

import styled from "styled-components";

function Counter(){

    const Counter = styled.section`
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
    `;

    return(
        <Counter>
            <p>tenativas</p>
            <span>3</span>
        </Counter>
    )
};
export default Counter;