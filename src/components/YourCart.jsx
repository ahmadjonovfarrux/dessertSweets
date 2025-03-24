import { useGlobalContext } from "../context/useGlobalContext";
import { RiCloseCircleLine } from "react-icons/ri";

function YourCart() {
  const { cart: cart, dispatch, totalPrice } = useGlobalContext();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your cart</h1>
      <div className="emptyCartBox">
        {!cart.length && (
          <div>
            <img src="../images/illustration-empty-cart.svg" />
            <p className="emptyCartBox-text">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
      <div className="cartWrapper">
        {cart.length &&
          cart.map((c) => {
            const { name, amount, price, id } = c;
            return (
              <div className="cartModal-container" key={id}>
                <div>
                  <h3 className="cartModal-title">{name}</h3>
                  <div className="cartModal-priceBox">
                    <p className="cartModal-amount">{amount}x</p>
                    <p className="carModal-price">@{price}$</p>
                    <p className="cartModal-amount">{price * amount}$</p>
                  </div>
                </div>
                <RiCloseCircleLine
                  className="cartModal-icon"
                  onClick={() => dispatch({ type: "DELETE", payload: c.id })}
                />
              </div>
            );
          })}
        <div className="cartModal-totalPrice">
          <p className="totalPrice-text">Total Order</p>
          <h3 className="totalPrice-title">{totalPrice}$</h3>
        </div>
        <div className="carbon-box">
          <img src="" alt="image of tree" />
        </div>
      </div>
    </div>
  );
}

export default YourCart;
