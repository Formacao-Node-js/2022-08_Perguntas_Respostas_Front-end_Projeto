import React from "react";
import { FormModel, TextArea, Label, Card, Input } from "./style";

const Form = () => {
  return (
    <Card>
      <FormModel>
        <Label>Título</Label>
        <Input type="text" name="name" placeholder="Título da pergunta" />
        <Label>Descrição</Label>
        <TextArea placeholder="Descreva aqui sua duvida para que alguém possa te ajudar" />
      </FormModel>
    </Card>
  );
};

export default Form;
