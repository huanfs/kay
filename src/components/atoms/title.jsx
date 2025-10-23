import React from "react";

import styled from "styled-components";

const PrimaryTitle = styled.h1`
        text-transform:capitalize;
        font-weight:var(--heavy);
        color:var(--brown);
        text-align:center;
        text-shadow:var(--shadow);
    `;

function Title({value}){

    return(
        <PrimaryTitle>
            {value}
        </PrimaryTitle>
    )
};
export default Title;