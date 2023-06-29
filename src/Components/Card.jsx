import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage


     // Obtener los destacados existentes del localStorage (si los hay)
     const destacadosExistentes = JSON.parse(localStorage.getItem("destacados")) || [];

     // Crear un nuevo objeto de destacado basado en los datos de la Card actual
     const nuevoDestacado = {
       id,
       name,
       username,
     };
 
     // Agregar el nuevo destacado a la lista existente
     const nuevosDestacados = [...destacadosExistentes, nuevoDestacado];
 
     // Guardar la lista actualizada en el localStorage
     localStorage.setItem("destacados", JSON.stringify(nuevosDestacados));
  


  }

  return (
    <Link to='/detail/id' className="card-link">


      <div className="card">
              {/* En cada card deberan mostrar en name - username y el id */}
              <h3>{id}</h3> 
              <h1>{name}</h1>
                <img src="src/images/doctor.jpg" alt="foto-doctor" />
                <h2>{username}</h2>
                
              {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

              {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
              <button onClick={addFav} className="favButton">Add fav</button>
          </div>

    </Link>
   
  );
};

export default Card;
