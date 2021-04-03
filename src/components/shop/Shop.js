import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Shop = () => {
  return (
    <div>
      <Layout>
        <Header
          theme={'light'}
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          Header
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default Shop;
