import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
const Product = () => {
  let [index, setIndex] = useState(0);

  const images = [
    {
      original:
        'https://cdn.shopify.com/s/files/1/0651/6375/products/Kenya_360x.jpg?v=1604350798',
      originalClass: 'productImage',
    },
    {
      original:
        'https://cdn.shopify.com/s/files/1/0651/6375/products/Honduras2021A_2048x.jpg?v=1611611153',
      originalClass: 'productImage',
    },
  ];
  return (
    <div id="product">
      <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        items={images}
        startIndex={index}
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
            onClick={() => setIndex(1)}
          ></button>
          <button
            style={{
              background: 'black',
              borderRadius: '25px',
              padding: '12px',
            }}
            onClick={() => setIndex(0)}
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
      <p style={{ maxWidth: '230px' }}>
        Lorem ipsum or random text may be used
      </p>
    </div>
  );
};

export default Product;
