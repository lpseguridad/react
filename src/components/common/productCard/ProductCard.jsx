const ProductCard = (props) => {
  const { nombre, descripcion, precio } = props;

  return (
    <div>
      <h3>{nombre}</h3>
      <h4>{descripcion}</h4>
      <h4>{precio}</h4>
    </div>
  );
};

export default ProductCard;
