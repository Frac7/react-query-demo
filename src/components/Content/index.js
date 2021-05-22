/* eslint-disable import/no-anonymous-default-export */
import { Col, Layout, Row, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default ({ section }) => (
  <Content>
    <Row>
      <Col offset={6}>
        <Title>{section.title}</Title>
      </Col>
    </Row>
    <Row>
      <Col offset={6} xs={12}>
        {section.component}
      </Col>
    </Row>
  </Content>
);
