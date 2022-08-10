import React from "react";
import Perguntar from "../Button/Perguntar";
import { Card, FormModel, Input, Label, TextArea } from "./style";

const Form = () => {
  return (
    <Card>
      <FormModel>
        <Label>Título</Label>
        <Input type="text" name="titulo" placeholder="Título da pergunta" />
        <Label>Descrição</Label>
        <TextArea
          name="descricao"
          placeholder="Descreva aqui sua duvida para que alguém possa te ajudar"
        />
        <Perguntar
          onClick={(e) => {
            console.log("teste");
            e.preventDefault(); // previne/impede um evento padrão | nesse caso, impede que a página atualize
          }}
        />
      </FormModel>
    </Card>
  );
};

export default Form;
