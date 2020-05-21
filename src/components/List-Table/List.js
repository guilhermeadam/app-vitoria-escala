import React from "react";

const ListTable = ({ Scale }) => {
  return (
    <>
      {Scale.map((res) => (
        <tr key={res.pegada}>
          <th scope="row"> {res.pegada} </th>
          <td> {res.data} </td>
          <td> {res.codlinha} </td>
          <td> {res.servico} </td>
          <td> {res.origem} </td>
          <td> {res.hrini} </td>
          <td> {res.hrfim} </td>
        </tr>
      ))}
    </>
  );
};

export default ListTable;
