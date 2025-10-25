import React from "react";

import Title from "@atoms/title.jsx";
import SecondaryButton from "@atoms/secondaryButton.jsx";

import styled from "styled-components";

const StyledLetter = styled.main`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:2em;
    gap:2em; 

        & p{
            font-size:1.2em;
            text-align:center;
            word-space:10px;
            line-height:1.2em;
            color:var(--brown);
            text-shadow:var(--shadow);
            height:100%;
            overflow-y:scroll;
        }
`;

function Letter(){
    return(
        <StyledLetter>
            <Title value="Carta"/>
            <p translate="no">
                O resultado é sempre muito bom, mas a ação de fazer algo em prol de alguém — e, acima disso, o que se sente ao iniciar tal gesto — é, para mim, o verdadeiro ganho.
                Tenho gostado de trocar as poucas mensagens que trocamos. Desde o início, venho tentando refletir esse gostar nas ações que tenho tomado.
                Espero que você perceba o impulso por trás de cada gesto, porque é nele que está o verdadeiro “presente” da ação.
                Você é uma pessoa muito dinâmica, e isso chama muito a atenção — dá vontade de fazer as coisas por você.
                Antes que pense que todas essas ações são reflexo de alguém emocionado, venho por meio desta dizer: são sim!
                Não estou cara a cara contigo, então, para mim, não há muito do que ter vergonha. Senti vontade de te parabenizar e de te presentear — e é isso que gostaria de fazer.
                Mesmo que eu ou você suma depois, eu simplesmente senti essa vontade e estou ganhando muito mais que ti realizando isto.
                Espero que goste do que preparei. e em segundas intenções — aceite.
                Porque as primeiras intenções, você já sabe quais são.
            </p>
            <SecondaryButton value="voltar"/>
        </StyledLetter>
    )
};
export default Letter;