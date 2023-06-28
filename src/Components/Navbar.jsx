import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const theme  = useContext(ContextGlobal);

  return (
    <nav  className={theme.value}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link  to='Routes/Home'>Home</Link>
      <Link to='Routes/Contact' >Contacto</Link>
      <Link to='Routes/Favs'>Favoritos</Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button  onClick={()=> theme.changeValue()} >Change theme</button>
    </nav>
  )
}

export default Navbar