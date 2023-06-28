import { Route, Routes } from "react-router-dom";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const theme = useContext(ContextGlobal);

  return (
    <div className={theme.value}>
      <Navbar />

      <Routes>
        <Route path="/Routes/Home" element={<Home />} />

        <Route path="Routes/Contact" element={<Contact />} />

        <Route path="Routes/Favs" element={<Favs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
