import React from "react";
import ListTable from "../List-Table/List";
import './Table.css'

const Table = ({ Scale }) => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Pegada</th>
              <th scope="col">Data</th>
              <th scope="col">Cod.Linha</th>
              <th scope="col">Serviço</th>
              <th scope="col">Origem</th>
              <th scope="col">Hr.Ini</th>
              <th scope="col">Hr.Fim</th>
            </tr>
          </thead>
          <tbody>
            <ListTable Scale={Scale} />
          </tbody>
        </table>
        <button>Sair</button>
      </div>
    </>
  );
};

export default Table;
