import { Button } from "./style";

export const Botao = (props) => {
  return (
    <>
      <Button id={props.id} onClick={props.onClick}>
        {props.nome}
      </Button>
    </>
  );
};

export default Botao;
