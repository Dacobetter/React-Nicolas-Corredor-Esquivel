
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <header className="navbar">
            <div className="">
            <a href=""><h1>Gama</h1></a>
            </div>
            <div className="link">
                <nav>
                    <Link><a href="">Inicio</a></Link>
                    <Link to="/productos"><a href="">Productos</a></Link>
                </nav>   
            </div>
                <CardWidget />
        </header>
    )
}
export default Navbar;
