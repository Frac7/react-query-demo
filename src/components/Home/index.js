/* eslint-disable import/no-anonymous-default-export */
import { Col, Layout, Row, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default () => (
  <Content>
    <Row justify="center">
      <Col>
        <Title>react-query demo</Title>
      </Col>
    </Row>
    <Row justify="center">
      <img
        alt="react-query-logo"
        src="https://react-query.tanstack.com/_next/static/images/emblem-light-5d1cdce6c8bbb006ac6cefb8e1642877.svg"
      />
    </Row>
  </Content>
);
