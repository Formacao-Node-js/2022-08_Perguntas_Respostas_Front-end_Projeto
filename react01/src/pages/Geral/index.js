import React from "react";
import CardPergunta from "../../components/CardPergunta";
import Header from "../../components/Header";
import { Painel } from "../../style";
const Geral = () => {
  return (
    <>
      <Header />
      <Painel>
        <CardPergunta />
      </Painel>
    </>
  );
};

export default Geral;
