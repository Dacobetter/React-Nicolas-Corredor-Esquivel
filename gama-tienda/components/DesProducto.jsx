import { useEffect, useState } from "react";
import data from "../json/data.json";
import { useParams } from "react-router-dom";
import { Incrementador } from "./Incrementador";

export const DesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = data.productos.find(
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
          <h2>{data.nombre}</h2>
          <div className="contenedorCard">
            <div className="card" style={{ width: "300px" }} key={data.id}>
              <div style={{ maxWidth: "100%" }}>
                <img
                  src={data.foto}
                  className="card-img-top"
                  alt=""
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.nombre}</h5>
                <p className="card-text">Precio: {data.precio}</p>
                <p className="card-text">Cantidad: {data.cantidad}</p>
                <p className="card-text">Descripción: {data.descripcion}</p>
                <Incrementador />
                <button className="btn btn-danger">Comprar</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};