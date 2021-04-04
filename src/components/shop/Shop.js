import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Content from './Content';

const Shop = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <div id="footer">
        <p>Mobilise frontend assessment - Yankov</p>
      </div>
    </Layout>
  );
};

export default Shop;
