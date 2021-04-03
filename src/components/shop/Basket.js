import { Row, Col } from 'antd';
import Card from './Card';
const Basket = ({ user }) => {
  if (!user) return 'Please log In';
  return (
    <div style={{ padding: '3.5em' }}>
      <Row>
        <Col style={{ background: 'lightblue' }} span={14}>
          col-12
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
