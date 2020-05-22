import React from "react";
import ListTable from "../List-Table/List";
import Button from "../Button/Button";
import "./Table.css";

const Table = ({ Scale }) => {
  return (
    <div className="container">
      <div className="table-responsive table-sm">
      <table className="table table-bordered">
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
      </div>
      <Button />
    </div>
  );
};

export default Table;
