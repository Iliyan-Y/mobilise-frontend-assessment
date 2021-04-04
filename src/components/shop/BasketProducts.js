import { useState } from 'react';

let products = [
  {
    image:
      'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Bread',
    quantity: 1,
    color: '#45230a',
    price: '2.90',
  },
];

const BasketProducts = () => {
  return (
    <>
      <div id="cart-products">
        {products.map((product) => (
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
              <h2>-</h2>
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
              <h2>+</h2>
            </div>
            <h2 style={{ marginTop: '1em' }}>{product.price}</h2>
            <h2>X</h2>
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
        <a href="#">{'<-- go back'}</a> <h2>Total: 000</h2>
      </div>
    </>
  );
};

export default BasketProducts;
