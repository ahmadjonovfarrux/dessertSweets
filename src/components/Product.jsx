import { useGlobalContext } from "../context/useGlobalContext";

function Product({ d }) {
  const { dispatch, cart } = useGlobalContext();
  const { name, category, image, price, id } = d;
  //   {} or undefined
  const alreadyAdded = cart.find((d) => d.id == id);

  return (
    <div className="dessert-card">
      <picture>
        <source media="(min-width:998px" srcSet={image.desktop} />
        <source media="(min-width:800px" srcSet={image.tablet} />
        <source media="(min-width:375px" srcSet={image.mobile} />
        <img
          className="dessert-card-image"
          src={image.thumbnail}
          alt="image of dessert "
        />
      </picture>
      {/* Button */}
      <div className="btn-wrapper">
        {/* Shop */}
        {!alreadyAdded && (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...d, amount: 1 },
              })
            }
            className="btn add-to-card-btn"
          >
            <span className="add-to-card-btn-wrapper">
              <img
                src="../images/icon-add-to-cart.svg"
                alt="image of add icon"
              />
              Add to Card
            </span>
          </button>
        )}
        {/* Incr & Dec */}
        {alreadyAdded && (
          <div className="newBtnWrapper">
            <button
              className="btn newBtn"
              onClick={() => {
                if (alreadyAdded.amount == 1) {
                  dispatch({ type: "DELETE", payload: d.id });
                } else {
                  dispatch({ type: "DECREMENT", payload: d.id });
                }
              }}
            >
              -
            </button>
            <h2>{alreadyAdded.amount}</h2>
            <button
              className="btn newBtn"
              onClick={() => dispatch({ type: "INCREMENT", payload: d.id })}
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="desserts-card-body">
        <p className="desserts-card-category">{category}</p>
        <h3 className="desserts-card-name">{name}</h3>
        <p className="dessets-card-price">${price}</p>
      </div>
    </div>
  );
}

export default Product;
