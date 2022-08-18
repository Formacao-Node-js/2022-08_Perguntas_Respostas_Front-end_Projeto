import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";

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
      <h1>{data.titulo}</h1>

      <h3>{data.descricao}</h3>
    </>
  );
};

export default PerguntaId;
