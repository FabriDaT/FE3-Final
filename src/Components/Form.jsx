import React, { useState } from "react";


const Form = (props) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre , setNombre] = useState('')
  const [email , setEmail] = useState('')
  const [error, setError] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()

    if( nombre.length <= 5) {
      setError('Por favor verifique su informacion')
    } else { 
      props.onSubmit({nombre})
      setEmail('')
      setNombre('')
      setError('')
      
     }
  }

  return (
    <div>
      <form  onSubmit={ handlerSubmit}>
          <input type="text" placeholder="Ingrese su nombre" value={nombre}
          
          onChange={(e)=> setNombre(e.target.value) }
          />
          <input type="email"  placeholder="Email de contacto" value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <button type="submit">Contactar</button>
      </form>
      {error && <p>{error}</p> }
    </div>
  );
};

export default Form;
