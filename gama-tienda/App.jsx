import Navbar from "./components/Navbar.jsx";
import ItemContainer from "./components/ItemContainer.jsx"
import "./App.css"

function App(){
    return(
        <div>
            <Navbar />
            <div className="cardContainer">
            <ItemContainer 
            titulo="GPU AMD"
            imagen="./img/gpu3.png"
            descripccion="$300"/>
            
            </div>
        </div>
    )
}
export default App;