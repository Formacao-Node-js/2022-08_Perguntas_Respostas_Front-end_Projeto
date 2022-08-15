import React from "react";
import Botao from "../Button";
import { Card, DescriptionDiv, BotaoDiv } from "./style";
import { useNavigate } from "react-router";
import api from "../../service/api";

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
