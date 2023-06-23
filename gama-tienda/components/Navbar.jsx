
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <header className="navbar">
            <div className="">
            <Link to="/"><a href=""><h1>Gama</h1></a></Link>
            </div>
            <div className="link">
                <nav>
                    <Link to="/productos"><a href="">Productos</a></Link>
                    <Link to="/productos/componentes">componentes</Link>
                    <Link to="/productos/grafica">Graficas</Link>
                    <Link to="/productos/periferico"> Periferocos </Link>
                </nav>   
            </div>
                <CardWidget />
        </header>
    )
}
export default Navbar;
