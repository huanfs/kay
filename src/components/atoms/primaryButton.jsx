import React from "react";

import styled from "styled-components";

function PrimaryButton({value}){

    const Button = styled.button`
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
    `;

    return(
        <Button>
            {value}
        </Button>
    )
};
export default PrimaryButton;