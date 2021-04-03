import React from 'react';
import { Layout, Menu } from 'antd';
import Header from './Header';
import Content from './Content';

const { Footer } = Layout;

const Shop = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer id="footer">Footer</Footer>
    </Layout>
  );
};

export default Shop;
