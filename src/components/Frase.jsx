import React from "react";
import styled from "styled-components";

function Frase({ quote, author }) {

  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>-{author}</p>
    </ContenedorFrase>
  );
}

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 10rem;
  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 1rem;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 5rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

export default Frase;
