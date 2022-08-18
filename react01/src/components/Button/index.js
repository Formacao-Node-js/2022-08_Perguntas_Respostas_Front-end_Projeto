import { Button } from "./style";

export const Botao = (props) => {
  return (
    <>
      <Button onClick={props.onClick}>{props.nome}</Button>
    </>
  );
};

export default Botao;
