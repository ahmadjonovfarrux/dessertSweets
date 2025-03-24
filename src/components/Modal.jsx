import YourCart from "./YourCart";

function Modal({ setOpenModal, cart, totalPrice }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <img
            className="modal-image"
            src="../images/icon-order-confirmed.svg"
            alt="image of checked"
          />
          <h4 className="modal-title">Order Confirmed</h4>
          <p className="modal-text">We hope you enjoy your food!</p>
          <div className="modal-menu">
            {cart.length &&
              cart.map((d) => {
                const { name, category, price, image, amount, id } = d;
                return (
                  <div className="modal-box" key={id}>
                    <div className="modal-content">
                      <img src={image.mobile} width="48" height="48" />
                      <div>
                        <h4 className="modalDes-title">{name}</h4>
                        <p className="modalDes-amount">
                          x{amount}
                          <span className="modalDes-price">@{price}$</span>
                        </p>
                      </div>
                    </div>
                    <p className="modalTot-price">${price * amount}</p>
                  </div>
                );
              })}
            <div className="totalPrice-container">
              <p className="totalPrice-text">Total Order</p>
              <h2 className="totalPrice-title">${totalPrice}</h2>
            </div>
          </div>
        </div>
        <button
          className="btn cartModal-btn totalPrice-btn"
          onClick={() => setOpenModal(false)}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
