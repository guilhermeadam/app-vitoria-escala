import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import "./Main.css";

const Main = () => {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (submit) {
      axios
        .get(`http://localhost:3001/escala?mat=${submit}&_sort=data`)
        .then((response) => setValues(response.data));
    }
  }, [submit]);

  function onSubmit(event) {
    event.preventDefault();
    setSubmit(input);
  }

  function onChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="main-page">
        <h1>Consulta Escala</h1>
        <h2>Empresa Vitória</h2>
        <hr />
        <h3>Matrícula</h3>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Ex: 1958"
            required
            type="number"
            onChange={onChange}
          />
          <br />
          <button className="main-button" type="submit">
            Consultar
          </button>
        </form>
      </div>
      {values.length > 0 && <Table Scale={values} />}
    </>
  );
};

export default Main;
