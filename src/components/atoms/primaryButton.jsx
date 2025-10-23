"use client"

import React, {useState, useEffect} from "react";

import {useNavigate} from "react-router-dom";

import {usePassword} from "@store/usePassword.js";
import {useChance} from "@store/useChance.js";

import styled from "styled-components";

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
        cursor:pointer;

            &:disabled{
                opacity:0.6;
                cursor:not-allowed;
            }
    `;

function PrimaryButton({value}){

    const[isDisabled, setIsDisabled] = useState(true);

    const {password} = usePassword();
    const{decreaseChance} = useChance();

    const navigate = useNavigate();

    useEffect(()=>{
        password?.length == 4  ? setIsDisabled(false) : setIsDisabled(true);
    },[password]);

    function CheckPassword(){
        console.log("oi")
        if(password != 2005){
            decreaseChance();
        }
        else{
            navigate("/main");
        }
    }

    return(
        <Button disabled={isDisabled} onClick={CheckPassword}>
            {value}
        </Button>
    )
};
export default PrimaryButton;