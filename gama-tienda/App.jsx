import Navbar from "./components/Navbar";
import "./app.css"
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom"
import { ItemContainer } from "./components/itemContainer";
import { DesProducto } from "./components/DesProducto";



function App() {
  

  return (
 <BrowserRouter>

  <Navbar />
  <Routes>
    <Route path="/productos/" element={<ItemContainer />}/>
    <Route path="/productos/:categoria" element={<ItemContainer />}/>
    <Route path="/productos/:categoria/:id" element={<DesProducto />}/>
    
  </Routes>
 </BrowserRouter>
  )
}

export default App;