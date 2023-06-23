import { useEffect, useState } from "react";
import productos from "../json/productos.json" 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productosAMostrar, setProductosAMostrar] = useState([]);

  useEffect(() => {
    let productosFiltrados = [];
    
    if (categoria) {
      productosFiltrados = productos.productos.filter(
        (producto) => producto.categoria === categoria
      );
    } else {
      productosFiltrados = productos.productos;
    }

    setProductosAMostrar(productosFiltrados);
  }, [categoria]);

  return (
    <div className="Itemcontainer">
      <div className="contenedorCard">
        {productosAMostrar.map((producto) => (
          <div className="card" style={{ width: "300px" }} key={producto.id}>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={producto.foto}
                className="card-img-top"
                alt=""
                style={{ width: "100%", height: "200px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text"> Precio: {producto.precio}</p>
              <p className="card-text"> Cantidad: {producto.cantidad}</p>
              <p className="card-text">Descripción: {producto.descripcion}</p>
              <Link to={`/productos/${categoria}/${producto.id}`}><button className="btn btn-danger">Ver mas</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};