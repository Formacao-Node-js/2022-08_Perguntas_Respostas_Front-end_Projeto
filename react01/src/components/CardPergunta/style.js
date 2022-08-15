import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 23em;
  min-height: 10em;
  height: auto;
  display: flex;
  margin: 3%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  word-break: normal;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
  margin-top: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BotaoDiv = styled.div`
display: flex;
margin-top: 7%;
align-self: center;
`