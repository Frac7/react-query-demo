/* eslint-disable import/no-anonymous-default-export */
import { Col, Layout, Row, Typography } from 'antd';

import { sections } from './utils';

const { Content } = Layout;
const { Title } = Typography;

export default ({ section }) => (
  <Content>
    <Row>
      <Col offset={6}>
        <Title>{sections[section].title}</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={12} offset={6}>
        {sections[section].component}
      </Col>
    </Row>
  </Content>
);
