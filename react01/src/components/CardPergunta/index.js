import React from "react";

import Botao from "../Button";
import { BotaoDiv, Card, DescriptionDiv } from "./style";

const CardPergunta = (props) => {
  return (
    <>
      <Card>
        <h2> {props.titulo}</h2>
        <DescriptionDiv>{props.descricao}</DescriptionDiv>
        <BotaoDiv>
          <Botao nome={props.nome} onClick={props.onClick} />
        </BotaoDiv>
      </Card>
    </>
  );
};

export default CardPergunta;
