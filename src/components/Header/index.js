/* eslint-disable import/no-anonymous-default-export */
import { Row, Col, Layout, Menu } from 'antd';

import { sections } from '../Content/utils';

const { Header } = Layout;

export default ({ setSection }) => {
  const handleClick = ({ key }) => setSection(key);

  return (
    <Header>
      <Row>
        <Col offset={6} xs={12}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} onClick={handleClick}>
            {sections.map(section => <Menu.Item key={section.key}>{section.title}</Menu.Item>)}
          </Menu>
        </Col>
      </Row>
  </Header>
  );
}