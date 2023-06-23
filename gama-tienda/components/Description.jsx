import { useEffect, useState } from "react";
import productos from "../json/productos.json";
import { useParams } from "react-router-dom";
import { Modificador } from "./Modificador";

export const DesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = productos.productos.find(
      (prod) => prod.id === Number(id)
    );

    if (productoEncontrado) {
      setProducto(productoEncontrado);
    }
  }, [id]);

  return (
    <div className="Itemcontainer">
      {producto && (
        <>
          <h2>{producto.nombre}</h2>
          <div className="contenedorCard">
            <div className="card" style={{ width: "300px" }} key={producto.id}>
              <div style={{ maxWidth: "100%" }}>
                <img
                  src={producto.img}
                  className="card-img-top"
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Cantidad: {producto.cantidad}</p>
                <p className="card-text">Descripción: {producto.descripcion}</p>
                <Modificador />
                <button className="btn btn-danger">Comprar</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};