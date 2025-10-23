import React from "react";

import Title from "@atoms/title.jsx";
import Card from "@atoms/card.jsx";
import Icons from "@molecules/icons.jsx";

import styled from "styled-components";

const StyledMain = styled.main`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:3em;
    padding:3em 0;
    background-color:var(--desaturated-yellow);

        & h1{
            font-size:4em;
        }

        & article{
            display:flex;
            align-items:center;
            flex-direction:column;
            gap:10px;
        }
        
        & span{
            text-transform:uppercase;
            font-weight:var(--heavy);
            color:var(--soft-silver);
            text-shadow:var(--shadow);
        }
`;

function Main(){
    return(
        <StyledMain>
            <Title value="kaylane carlos cunha"/>
            <span>princesa, modelo e futura advogata!</span>
            <Icons/>
            <article>
                <Card imageurl="/media/image1.svg" value="leia-me" url="/letter"/>
                <Card imageurl="/media/image2.svg" value="dedicada a ti"/>
                <Card imageurl="/media/image4.svg" value="presente"/>
            </article>
        </StyledMain>
    )
};
export default Main;