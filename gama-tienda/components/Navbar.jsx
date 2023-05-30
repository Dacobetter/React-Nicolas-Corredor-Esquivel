
import CardWidget from "./CardWidget";

const navbar = () =>{
    return(
        <header className="navbar">
            <div className="">
            <a href=""><h1>Gama</h1></a>
            </div>
            <div className="link">
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Productos</a>
                </nav>   
            </div>
                <CardWidget />
        </header>
    )
}
export default navbar;