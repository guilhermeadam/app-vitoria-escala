import React, { useState } from "react";
import axios from 'axios'
import "./Main.css";

const Main = () => {
  const [ input, setInput ] = useState('')
  const [ , setSubmit ] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    setSubmit(input)
  }

  function onChange(event) {
    setInput(event.target.value)
  }

  return (
    <div className="container">
      <h1>Consulta Escala</h1>
      <h2>Empresa Vitória</h2>
      <hr />
      <h3>Matrícula</h3>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} />
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default Main;
