import { Route, Routes } from "react-router-dom";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='Routes/Home' element={<Home />}>
          
        </Route>
        <Route path='Routes/Contact' element={<Contact />}>
          
        </Route>
        <Route path='Routes/Favs' element={<Favs />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
