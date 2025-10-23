import React from "react";

import styled from "styled-components";

const StyledCard = styled.section`
    width:370px;
    height:130px;
    box-shadow:var(--shadow);
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    color:var(--white);
    background-image: url(${props => props.$imageurl});
    background-size:100% 100%;
    background-repeat:no-repeat;
`;

function Card({imageurl, value}){
    return(
        <StyledCard $imageurl={imageurl}>
            {value}
        </StyledCard>
    )
};
export default Card;