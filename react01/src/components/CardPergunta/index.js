import React from "react";
import Botao from "../Button";
import { Card, DescriptionDiv, BotaoDiv } from "./style";

const CardPergunta = (props) => {
  return (
    <>
      <Card>
        <h2> {props.titulo}</h2>
        <DescriptionDiv>{props.descricao}</DescriptionDiv>
        <BotaoDiv>
          <Botao nome="Responder" on />
        </BotaoDiv>
      </Card>
    </>
  );
};

export default CardPergunta;
