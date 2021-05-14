/* eslint-disable import/no-anonymous-default-export */
import { Col, Layout, Row } from 'antd';

import { sections } from './utils';

const { Content } = Layout;

export default ({ section }) => (
  <Content>
    <Row>
      <Col xs={12} offset={6}>
        {sections[section].component}
      </Col>
    </Row>
  </Content>
)