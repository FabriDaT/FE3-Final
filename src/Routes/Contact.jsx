import React, { useState } from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [mensaje, setMensaje] = useState("");
  const handlerSubmit = (user) => {
    setMensaje("Gracias " + user.nombre + " te cotactaremos cuanto antes via email!");
  };
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onSubmit={handlerSubmit} />
      <p>{mensaje}</p>
    </div>
  );
};

export default Contact;
