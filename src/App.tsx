import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import NavBar from "./componets/NavBar";
import Works from "../src/pages/works"; 
function App() {

  return (
    <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Works/>} />
      </Routes>
    </>


  );

}

export default App
