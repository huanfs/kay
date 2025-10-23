import React from "react";

import { GiHighHeel } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";

import styled from "styled-components";

const IconsGroup = styled.section`
    max-width:300px;
    display:flex;
    align-items:center;
    gap:2em;
    color:var(--soft-silver);

        & svg{
            width:20px;
            height:20px;
        }
`;

function Icons(){
    return(
        <IconsGroup>
            <GiHighHeel/>
            <FaBalanceScale/>
            <FaMusic/>
            <RiFlowerFill/>
        </IconsGroup>
    )
};
export default Icons;