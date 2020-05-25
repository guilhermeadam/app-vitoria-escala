import React from "react";
import groupBy from 'json-groupby'

const GroupBy = () => {
  const array = [
    { Pegada: "1", Linha: "Araturi" },
    { Pegada: "1", Linha: "Araturi" },
    { Pegada: "2", Linha: "Jurema" },
    { Pegada: "2", Linha: "Jurema" },
    { Pegada: "3", Linha: "Metropole" },
    { Pegada: "3", Linha: "Metropole" },
  ];

  const group = groupBy(array, ['Linha'], ['Pegada'])

  console.log([{group}].length)
  console.log(array)

  return (
      <div>
         
              
          
      </div>
  )
};

export default GroupBy;
