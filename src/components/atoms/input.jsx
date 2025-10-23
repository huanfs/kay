import React from "react";

import {usePassword} from "@store/usePassword.js";

import styled from "styled-components";

    const InputAria = styled.input`
        max-width:340px;
        background-color:transparent;
        border:none;
        outline:0;
        text-align:center;
        font-size:4em;
        font-weight:var(--heavy);
        color:var(--brown);
        font-size:60px;
        border-bottom:4px solid var(--brown);
    `;

function Input(){

    const {setPassword} = usePassword();

    return(
        <InputAria 
            maxLength="4"
            onChange={(event)=>{setPassword(event.target.value)}}
        />
    )
};
export default  Input;