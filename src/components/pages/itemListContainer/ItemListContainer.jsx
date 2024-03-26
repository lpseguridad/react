import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        background: "#ccc",
        gap: "40px",
      }}
    >
      <ProductCard precio={100} nombre="Prod 1" descripcion="Descr 1" />
      <ProductCard precio={200} nombre="Prod 2" descripcion="Descr 2" />
      <ProductCard precio={300} nombre="Prod 3" descripcion="Descr 3" />
    </div>
  );
};

export default ItemListContainer;
