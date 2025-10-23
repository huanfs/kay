import React from "react";

import {useNavigate} from "react-router-dom";

import styled from "styled-components";

const StyledButton = styled.button`
    min-width:270px;
    padding:1em;
    text-transform:uppercase;
    text-align:center;
    font-weight:var(--heavy);
    background-color:var(--champagne);
    color:var(--white);
    box-shadow:var(--shadow);
    border:none;
    outline:0;
    border-radius:10px;
    cursor:pointer;
`;

function SecondaryButton({value}){

    const navigate = useNavigate();

    function HandleBack(){
        navigate("/main");
    }

    return(
        <StyledButton type="button" onClick={HandleBack}>
            {value}
        </StyledButton>
    )
};
export default SecondaryButton;