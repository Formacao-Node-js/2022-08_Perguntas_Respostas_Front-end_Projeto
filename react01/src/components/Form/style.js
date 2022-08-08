import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid black;
  max-width: 35em;
  width: 35em;
  height: 23em;
  margin: 3% 0 3% 0;
  display: flex;
  box-sizing: border-box;
  background-color: #40e0d0;
`;
export const FormModel = styled.form`
  padding: 3%;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Label = styled.label`
  font-size: 25px;
  margin: 2% 0 2% 0;
`;

export const Input = styled.input`
  height: 35px;
  width: 100%;
  font-size: 18px;
  padding-left: 2.5%;
  display: flex;
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  max-height: 200px;
  height: 200px;
  min-height: 200px;
  max-width: 100%;
  width: 100%;
  min-width: 100%;
  padding: 2.5% 2% 2.5% 2.5%;
  margin-bottom: 2%;
  display: flex;
`;
