import Product from './Product';

const Content = () => {
  return (
    <div style={{ marginTop: '3em', textAlign: 'center' }}>
      <h2>Products</h2>
      <div id="content">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Content;
