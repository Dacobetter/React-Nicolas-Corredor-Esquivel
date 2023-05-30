const ItemContainer = ({ imagen, titulo, descripccion }) => {
    return (
        
        <div className="card" style={{ width: "300px" }}>
          <div style={{ maxWidth: "100%" }}>
            <img src={imagen} className="card-img-top" alt="" style={{ width: "100%", height: "300px" }} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripccion}</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
    );
}
  
  export default ItemContainer;