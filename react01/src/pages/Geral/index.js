import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CardPergunta from "../../components/CardPergunta";
import Header from "../../components/Header";
import api from "../../service/api";
import { Painel } from "../../style";
import { SubHeader } from "./style";

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

  let navigate = useNavigate();

  return (
    <>
      <Header />
      <SubHeader>
        <a id="link" href="/">
          <h1>Faça uma pergunta</h1>
        </a>
      </SubHeader>
      <Painel>
        {data.map((res, k) => {
          return (
            <CardPergunta
              key={k}
              descricao={res.descricao}
              titulo={res.titulo}
              nome="Visualizar"
              onClick={() => navigate(`/pergunta/${res.id}`)}
            />
          );
        })}
      </Painel>
    </>
  );
};

export default Geral;
