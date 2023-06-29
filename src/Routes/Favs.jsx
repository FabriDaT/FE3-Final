import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const destacados = JSON.parse(localStorage.getItem("destacados")) || [];

  const theme = useContext(ContextGlobal);
  return (
    <>
      <h1>Dentists Favs</h1>
    
      <div className={`card-grid ${theme === "dark" ? "dark" : "light"}`}>
      
            {/* Renderizar una Card por cada destacado */}
        {destacados.map((destacado) => (
          <Card key={destacado.id} destacado={destacado} /> ))
        }
        
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
