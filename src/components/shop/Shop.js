import { useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Content from './Content';
import { mockProductData } from '../../mockProductData';

const Shop = () => {
  return (
    <Layout>
      <Header />
      <Content products={mockProductData} />
      <div id="footer">
        <p>Mobilise frontend assessment - Yankov</p>
      </div>
    </Layout>
  );
};

export default Shop;
