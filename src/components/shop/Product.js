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
            className="btn-0 btn-round"
            style={{
              background: 'red',
            }}
            onClick={() => setIndex(1)}
          ></button>
          <button
            className="btn-0 btn-round"
            style={{
              background: 'black',
            }}
            onClick={() => setIndex(0)}
          ></button>
        </span>
        <button className="btn-0">Add to cart</button>
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
        <p>title</p>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Share <DownOutlined />
          </a>
        </Dropdown>
      </div>

      <p style={{ maxWidth: '230px' }}>
        Lorem ipsum or random text may be used
      </p>
    </div>
  );
};

export default Product;
