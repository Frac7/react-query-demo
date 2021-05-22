/* eslint-disable import/no-anonymous-default-export */
import { Row, Col, Card, List, Avatar, Spin, Alert } from 'antd';
import { useQuery } from 'react-query';

export default () => {
  const { isLoading, error, data } = useQuery('UserList', () =>
    fetch('https://reqres.in/api/users?delay=5').then(res => res.json()),
  );

  if (isLoading) {
    return (
      <Row align="middle" justify="center">
        <Col>
          <Spin />
        </Col>
      </Row>
    );
  }

  if (error) {
    return <Alert message={error} type="error" />;
  }

  return (
    <Card>
      <List
        itemLayout="horizontal"
        dataSource={data.data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={`${item.first_name} ${item.last_name}`}
              description={item.email}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
