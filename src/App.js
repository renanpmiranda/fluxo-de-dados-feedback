import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("");
  const [fotoDePerfil, setFotoDePerfil] = useState("")

  const [titulo, setTitulo] = useState("")
  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header nome={nome} fotoDePerfil={fotoDePerfil} pageFlow={pageFlow}/>
          {pageFlow === 1 ? (
            <FormularioLogin 
            setPageFlow={setPageFlow} 
            nome={nome} 
            setNome={setNome} 
            fotoDePerfil={fotoDePerfil} 
            setFotoDePerfil={setFotoDePerfil}/>
          ) : (
            <FormularioPostagem 
            titulo={titulo} 
            setTitulo={setTitulo} 
            imagem={imagem} 
            setImagem={setImagem}
            descricao={descricao}
            setDescricao={setDescricao}/>
          )}
        </aside>
        <TelaDaPostagem titulo={titulo} imagem={imagem} descricao={descricao}/>
      </Container>
    </>
  );
}

export default App;
