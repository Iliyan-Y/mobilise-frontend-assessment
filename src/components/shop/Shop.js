import { Layout } from 'antd';
import Header from './Header';
import Content from './Content';
import { mockProductData } from '../../mockProductData';

const Shop = ({ basketState, setBasketState }) => {
  return (
    <Layout>
      <Header />
      <Content
        products={mockProductData}
        basketState={basketState}
        setBasketState={setBasketState}
      />
      <div id="footer">
        <p>Mobilise frontend assessment - Yankov</p>
      </div>
    </Layout>
  );
};

export default Shop;
