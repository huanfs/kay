import React from "react";

import Title from "@atoms/title.jsx";
import SecondaryButton from "@atoms/secondaryButton.jsx";
import Roulette from "@atoms/roulette.jsx";

import styled from "styled-components";

const StyledSort = styled.main`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    padding:1em;
`;

function Sort(){
    return(
        <StyledSort>
            <Title value="toque na roleta para sortear"/>
            <Roulette/>
            <SecondaryButton value="voltar"/>
        </StyledSort>
    )

};
export default Sort;