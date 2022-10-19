import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };

  function onChangeNome (e) {
    props.setNome(e.target.value)
  }

  function onChangeFotoDePerfil (e) {
    props.setFotoDePerfil(e.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.nome} onChange={onChangeNome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.fotoDePerfil} onChange={onChangeFotoDePerfil} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
