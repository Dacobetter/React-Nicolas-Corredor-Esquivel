import Navbar from "./components/Navbar";
import "./app.css"
import { BrowserRouter, Routes, Route,}  from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer";
import { Description } from "./components/Description";



function App() {
  

  return (
 <BrowserRouter>

  <Navbar />
  <Routes>
    <Route path="/productos/" element={<ItemListContainer />}/>
    <Route path="/productos/:categoria" element={<ItemListContainer />}/>
    <Route path="/productos/:categoria/:id" element={<Description />}/>
    
  </Routes>
 </BrowserRouter>
  )
}

export default App;