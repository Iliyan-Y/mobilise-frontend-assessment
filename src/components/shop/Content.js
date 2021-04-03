const Content = () => {
  return (
    <div id="content">
      {exampleData()}
      {exampleData()}
      {exampleData()}
      {exampleData()}
      {exampleData()}
    </div>
  );
};

export default Content;

function exampleData() {
  return (
    <div id="product">
      <img
        src="https://cdn.shopify.com/s/files/1/0651/6375/products/Kenya_360x.jpg?v=1604350798"
        alt="coffee"
        style={{ width: '250px' }}
      />
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '92%',
          marginTop: '0.3em',
        }}
      >
        <span>
          Color:{' '}
          <button
            style={{
              background: 'red',
              borderRadius: '25px',
              padding: '12px',
            }}
          ></button>
          <button
            style={{
              background: 'black',
              borderRadius: '25px',
              padding: '12px',
            }}
          ></button>
        </span>
        <button
          style={{
            borderRadius: '14px',
          }}
        >
          Add to cart
        </button>
      </div>
      <div
        style={{
          maxWidth: '250px',
          background: 'lightgrey',
          height: '1px',
          margin: '0.5em 0',
        }}
      ></div>
      <p>title</p>
      <p>Lorem ipsum or random text may be used</p>
    </div>
  );
}
