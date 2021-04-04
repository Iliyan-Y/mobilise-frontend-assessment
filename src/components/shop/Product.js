import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.facebook.com/">FaceBook</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.instagram.com/">Instagram</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://twitter.com/">Twitter</a>
    </Menu.Item>
  </Menu>
);

const Product = ({ product, basketState, setBasketState }) => {
  let [photoIndex, setPhotoIndex] = useState(0);

  function handleAddToCart() {
    if (!isProductInBasket()) {
      product.quantity = 1;
      product.image = product.images[photoIndex].original;
      setBasketState([...basketState, product]);
    }
  }

  function isProductInBasket() {
    let output = false;
    basketState.map((basketProduct) => {
      if (basketProduct.title === product.title) {
        basketProduct.quantity += 1;
        output = true;
      }
    });
    return output;
  }

  return (
    <div id="product">
      <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        items={product.images}
        startIndex={photoIndex}
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
            className="btn-0 btn-round"
            style={{
              background: product.colors[0],
            }}
            onClick={() => setPhotoIndex(1)}
          ></button>
          <button
            className="btn-0 btn-round"
            style={{
              background: product.colors[1],
            }}
            onClick={() => setPhotoIndex(2)}
          ></button>
        </span>
        <button onClick={() => handleAddToCart()} className="btn-0">
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '96%',
        }}
      >
        <p>{product.title}</p>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Share <DownOutlined />
          </a>
        </Dropdown>
      </div>

      <p style={{ maxWidth: '230px' }}>{product.description}</p>
    </div>
  );
};

export default Product;
