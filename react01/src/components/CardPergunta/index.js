import React from "react";
import { useNavigate } from "react-router";
import Botao from "../Button";
import { BotaoDiv, Card, DescriptionDiv } from "./style";

const CardPergunta = (props) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <Card>
        <h2> {props.titulo}</h2>
        <DescriptionDiv>{props.descricao}</DescriptionDiv>
        <BotaoDiv>
          <Botao nome="Visualizar" onClick={handleClick} />
        </BotaoDiv>
      </Card>
    </>
  );
};

export default CardPergunta;
