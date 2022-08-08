import React from "react";
import { FormModel, TextArea, Label } from "./style";

const Form = () => {
  return (
    <>
      <FormModel>
        <Label>Título</Label>
        <input type="text" name="name" placeholder="teste" />
        <Label>Descrição</Label>
        <TextArea />
      </FormModel>
    </>
  );
};

export default Form;
