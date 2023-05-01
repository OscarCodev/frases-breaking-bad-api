import styled from "styled-components";
import { useState, useEffect } from "react";
import Frase from "./components/Frase";

function App() {
  // state de frases
  const [frase, guardarFrase] = useState({});


  const consultarAPI = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  //cargar una frase al inicio y una sola vez
  //es como si se hubiera hecho click automaticamente al cargar el componente
  useEffect(()=>{
    consultarAPI();
  },[])

  return (
    <Contenedor>
      <Frase {...frase}></Frase>
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

export default App;
