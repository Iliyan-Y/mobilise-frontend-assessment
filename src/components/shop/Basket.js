import { Row, Col } from 'antd';
import Card from './Card';
const Basket = ({ user }) => {
  if (!user) return 'Please log In';
  return (
    <div style={{ padding: '3.8em' }}>
      <Row>
        <Col style={{ background: 'lightblue' }} span={14}>
          col-12
        </Col>
        <Col style={{ background: 'darkgrey' }} span={10}>
          <Card />
        </Col>
      </Row>
    </div>
  );
};

export default Basket;
