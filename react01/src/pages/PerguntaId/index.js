import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../service/api";
import { Container } from "../../style";
import { Card, TituloDiv, DescricaoDiv } from "./style";

const PerguntaId = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get(`/perguntaid/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  console.log(data);

  return (
    <>
      <Header />
      <Container>
        <Card>
          <TituloDiv>
            <h1>{data.titulo}</h1>
          </TituloDiv>
          <DescricaoDiv>
            <h3>" {data.descricao} "</h3>
          </DescricaoDiv>
        </Card>
      </Container>
    </>
  );
};

export default PerguntaId;
