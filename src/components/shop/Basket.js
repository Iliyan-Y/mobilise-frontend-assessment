import { Row, Col } from 'antd';
import BasketProducts from './BasketProducts';
import Card from './Card';

const Basket = ({ user, basketState, setBasketState }) => {
  console.log(basketState);
  if (!user) return 'Please log In';
  return (
    <div style={{ padding: '3.5em' }}>
      <Row>
        <Col span={14}>
          <h2>Shopping Cart</h2>
          <BasketProducts
            basketState={basketState}
            setBasketState={setBasketState}
          />
        </Col>
        <Col style={{ background: '#363636', padding: '2em' }} span={10}>
          <h2 style={{ color: 'white' }}>Card Details</h2>
          <Card />
        </Col>
      </Row>
    </div>
  );
};

export default Basket;
