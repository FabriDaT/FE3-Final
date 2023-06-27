import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Routes/Home'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link  to='/Home'>Home</Link>
      <Link>Contacto</Link>
      <Link>Favoritos</Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar