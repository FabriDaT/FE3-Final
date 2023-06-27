
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"


function App() {
  return (
      <div className="App">

          <Navbar/>
       

          <Routes  path='/' element={<Navbar/>}>
            <Route path={Routes.home} element={<Home />}> Home </Route>
            <Route path={Routes.contacto}  element={<Contact />}>Contacto</Route>
            <Route path={Routes.favoritos}  element={<Favs/>}>Favoritos</Route>
           
          </Routes>  
           <Footer/>
      </div>
  );
}

export default App;
