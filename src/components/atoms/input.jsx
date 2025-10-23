import React from "react";

import styled from "styled-components";

function Input(){

    const Input = styled.input`
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

    return(
        <Input maxLength="4"/>
    )
};
export default  Input;