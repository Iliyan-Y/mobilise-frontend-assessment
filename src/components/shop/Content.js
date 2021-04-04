import Product from './Product';

const Content = ({ products }) => {
  return (
    <div style={{ marginTop: '3em', textAlign: 'center' }}>
      <h2>Products</h2>
      <div id="content">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Content;
