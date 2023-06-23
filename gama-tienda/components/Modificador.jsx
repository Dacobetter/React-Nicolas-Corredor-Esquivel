import { useState } from "react";

export const Modificador = () => {
    
const [cantidad, setCantidad] = useState(0);

const handleIncrement = () => {
  setCantidad(cantidad + 1);
};

const handleDecrement = () => {
  if (cantidad > 0) {
    setCantidad(cantidad - 1);
  }
};
return(
    <div className="botones">
      <button onClick={handleDecrement} className="btn btn-primary">-</button>
      <span>{cantidad}</span>
      <button onClick={handleIncrement} className="btn btn-primary">+</button>
    </div>
)
}