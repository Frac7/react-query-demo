/* eslint-disable import/no-anonymous-default-export */
import { Row, Col, Layout, Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';

import { sections } from '../../utils';

const { Header } = Layout;

export default () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Row>
        <Col offset={6} xs={12}>
          <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
            {sections.map(section => (
              <Menu.Item key={section.path}>
                <Link to={section.path}>{section.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
