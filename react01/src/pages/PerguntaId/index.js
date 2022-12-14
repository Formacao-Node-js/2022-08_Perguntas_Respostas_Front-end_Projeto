import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Botao from "../../components/Button";
import Header from "../../components/Header";
import api from "../../service/api";
import { Container } from "../../style";
import { Card, DescricaoDiv, TituloDiv } from "./style";

const PerguntaId = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [dataRes, setDataRes] = useState([]);
  const [resposta, setResposta] = useState({
    corpo: "",
    perguntaId: id,
  });

  useEffect(() => {
    api.get(`/perguntaid/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  useEffect(() => {
    api.get(`/resposta/${id}`).then((res) => {
      setDataRes(res.data);
      console.log(dataRes);
    });
  }, []);

  const handleResposta = (e) => {
    setResposta((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Card>
          <TituloDiv>
            <h1>{data.titulo}</h1>
          </TituloDiv>
          <DescricaoDiv>
            <h4>" {data.descricao} "</h4>
          </DescricaoDiv>
        </Card>
        {dataRes.map((dados, k) => {
          return <Card key={k}>{dados.corpo}</Card>;
        })}

        <form>
          <label>Sua resposta</label>
          <textarea
            onChange={handleResposta}
            value={resposta.corpo}
            name="corpo"
          />
          <Botao
            nome="Enviar"
            onClick={async (e) => {
              await api.post("/salvarresposta", resposta);
            }}
          />
        </form>
      </Container>
    </>
  );
};

export default PerguntaId;
