import React from "react";

import Title from "@atoms/title.jsx";
import Input from "@atoms/input.jsx";
import Counter from "@molecules/counter.jsx";
import PrimaryButton from "@atoms/primaryButton.jsx";

import styled from "styled-components";

function AuthScreen(){

    const AuthScreen = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("/media/kay.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px);
    opacity:0.6;
  }
`;


    return(
        <AuthScreen>
            <Title value="Digite a senha para continuar!"/>
            <Input/>
            <Counter/>
            <PrimaryButton value ="prosseguir"/>
        </AuthScreen>
    )
};
export default AuthScreen;