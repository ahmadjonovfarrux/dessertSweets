import Product from "./Product";

function ProductList({ desserts, isPending }) {
  return (
    <div className="desserts">
      <h1 className="desserts-title">Desserts</h1>
      <div className="desserts-container">
        {desserts &&
          desserts.map((d) => {
            return <Product d={d} key={d.id} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
