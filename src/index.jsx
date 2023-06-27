import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>  {/* fijarse de crear un componente Context y recien colcar el import con esa ruta en este index.jsx */}
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    
  </Context>
     
  
);


