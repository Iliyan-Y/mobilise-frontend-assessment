import Product from './Product';

const Content = ({ products, basketState, setBasketState }) => {
  return (
    <div style={{ marginTop: '3em', textAlign: 'center' }}>
      <h2>Products</h2>
      <div id="content">
        {products.map((product) => (
          <Product
            product={product}
            basketState={basketState}
            setBasketState={setBasketState}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
