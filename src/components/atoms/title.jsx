import React from "react";

import styled from "styled-components";

function Title({value}){

    const Title = styled.h1`
        text-transform:capitalize;
        font-weight:var(--heavy);
        color:var(--brown);
        text-align:center;
        text-shadow:var(--shadow);
    `;

    return(
        <Title>
            {value}
        </Title>
    )
};
export default Title;