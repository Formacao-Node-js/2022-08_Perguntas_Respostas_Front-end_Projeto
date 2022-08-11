import React, { useState } from "react";
import api from "../../service/api";
import Perguntar from "../Button/Perguntar";
import { Card, FormModel, Input, Label, TextArea } from "./style";

const Form = () => {
  const [pergunta, setPergunta] = useState({
    titulo: "",
    descricao: "",
  });

  const handlePergunta = (e) => {
    setPergunta((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Card>
      <FormModel>
        <Label>Título</Label>
        <Input
          onChange={handlePergunta}
          value={pergunta.titulo}
          type="text"
          name="titulo"
          placeholder="Título da pergunta"
        />
        <Label>Descrição</Label>
        <TextArea
          onChange={handlePergunta}
          value={pergunta.descricao}
          name="descricao"
          placeholder="Descreva aqui sua duvida para que alguém possa te ajudar"
        />
        <Perguntar
          onClick={(e) => {
            api
              .post("/salvarpergunta", pergunta)
              .then((response) => alert(response.data));
            // e.preventDefault();
          }}
        />
      </FormModel>
    </Card>
  );
};

export default Form;
