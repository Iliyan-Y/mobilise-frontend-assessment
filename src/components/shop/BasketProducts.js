import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BasketProducts = ({ basketState, setBasketState }) => {
  let [totalAmount, setTotalAmount] = useState(calculateTotal());

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [basketState]);

  function calculateTotal() {
    let total = 0;
    if (basketState.length > 0) {
      basketState.map((product) => {
        total += product.price * product.quantity;
      });
    }
    return parseFloat(total).toFixed(2);
  }

  function handleIncrement(title) {
    let newState = basketState.map((basketProduct) => {
      if (basketProduct.title === title) {
        if (basketProduct.quantity < 10) {
          basketProduct.quantity += 1;
        }
      }
      return basketProduct;
    });
    setBasketState(newState);
  }

  function handleDecrement(title) {
    let newState = basketState.map((basketProduct) => {
      if (basketProduct.title === title && basketProduct.quantity > 1) {
        basketProduct.quantity -= 1;
      }
      return basketProduct;
    });
    setBasketState(newState);
  }

  function handleRemove(title) {
    let newState = basketState.filter((product) => product.title !== title);
    setBasketState(newState);
  }

  return (
    <>
      <div id="cart-products">
        {basketState.map((product) => (
          <div className="productInCart" key={product.title}>
            <div
              style={{
                width: '30vh',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '75px', height: '75px', borderRadius: '40px' }}
              />
              <span style={{ marginTop: '0.5em', marginLeft: '-2em' }}>
                <h3>{product.title}</h3>
                <p style={{ margin: 0 }}>Some text</p>
              </span>
            </div>
            <div
              style={{ display: 'flex', height: '40px', marginTop: '0.8em' }}
            >
              <h1
                className="basket-action-btn"
                onClick={() => handleDecrement(product.title)}
                style={{ color: product.quantity === 1 ? 'grey' : 'black' }}
              >
                -
              </h1>
              <p
                style={{
                  padding: '0.5em',
                  border: '1px solid grey',
                  minWidth: '45px',
                  textAlign: 'center',
                  margin: '0.3em',
                }}
              >
                {product.quantity}
              </p>
              <h1
                className="basket-action-btn"
                style={{ color: product.quantity === 10 ? 'grey' : 'black' }}
                onClick={() => handleIncrement(product.title)}
              >
                +
              </h1>
            </div>
            <h2 style={{ marginTop: '1em' }}>
              {parseFloat(product.price).toFixed(2)}
            </h2>
            <h2
              className="basket-action-btn"
              onClick={() => handleRemove(product.title)}
            >
              X
            </h2>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '90%',
          padding: '2em',
        }}
      >
        <Link to="/shop">{'<-- Continue Shopping'}</Link>{' '}
        <h2>Total: {totalAmount}</h2>
      </div>
    </>
  );
};

export default BasketProducts;
