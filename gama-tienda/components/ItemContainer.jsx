import { useEffect, useState } from "react";
import data from "../json/data.json" 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const ItemContainer = () => {
  const { categoria } = useParams();
  const [productosAmostrar, setProductosAmostrar] = useState([]);

  useEffect(() => {
    let productosFiltrados = [];
    
    if (categoria) {
      productosFiltrados = data.productos.filter(
        (data) => data.categoria === categoria
      );
    } else {
      productosFiltrados = data.productos;
    }

    setProductosAmostrar(productosFiltrados);
  }, [categoria]);

  return (
    <div className="Itemcontainer">
      <h2>Productos</h2>
      <div className="contenedorCard">
        {productosAmostrar.map((data) => (
          <div className="card" style={{ width: "300px" }} key={data.id}>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={data.img}
                className="card-img-top"
                alt=""
                style={{ width: "100%", height: "300px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.nombre}</h5>
              <p className="card-text"> Precio: {data.precio}</p>
              <p className="card-text"> Cantidad: {data.cantidad}</p>
              <p className="card-text">Descripción: {data.descripcion}</p>
              <Link to={`/productos/${categoria}/${data.id}`}><button className="btn btn-danger">Ver mas</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};