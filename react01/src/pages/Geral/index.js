import React, { useEffect, useState } from "react";
import CardPergunta from "../../components/CardPergunta";
import Header from "../../components/Header";
import { Painel } from "../../style";
import api from "../../service/api";

const Geral = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    return api.get("/perguntas").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Painel>
        {data.map((res, k) => {
          return (
            <CardPergunta
              key={k}
              descricao={res.descricao}
              titulo={res.titulo}
            />
          );
        })}
      </Painel>
    </>
  );
};

export default Geral;
