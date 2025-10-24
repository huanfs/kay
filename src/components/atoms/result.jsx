import React from "react";

import styled from "styled-components";

const StyledMessage = styled.section`
    width:220px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1em;
    background-color:var(--champagne);
    color:var(--soft-silver);
    box-shadow:var(--shadow);
    border-radius:10px;
    position:absolute;
    bottom:-100px;

    p{
        text-align:center;
    }

        & p span:first-child{
            text-decoration:underline;
            font-weight:var(--heavy);
            color:var(--brown);
        }

        & p span:last-child{
            color:var(--white);
        }
`;

function Result({result}){
    return(
        <StyledMessage>
            <p>
                você ganhou um produto da <span>{result}</span>!
                <span>basta tirar um print da tela e me enviar</span>
            </p>
        </StyledMessage>
    )
};
export default Result;