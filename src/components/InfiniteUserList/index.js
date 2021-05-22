/* eslint-disable import/no-anonymous-default-export */
import { Row, Col, Card, List, Avatar, Spin, Alert, Button } from 'antd';
import { useInfiniteQuery } from 'react-query';

export default () => {
  const {
    isLoading,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'UserInfiniteList',
    ({ pageParam = 1 }) =>
      fetch(`https://reqres.in/api/users?page=${pageParam}&delay=5`).then(res =>
        res.json(),
      ),
    {
      getNextPageParam: currentPage =>
        currentPage.page === currentPage.total_pages
          ? undefined
          : currentPage.page + 1,
    },
  );

  const handleClick = () => fetchNextPage();

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
    <Card
      actions={[
        hasNextPage && (
          <Button onClick={handleClick} loading={isFetchingNextPage}>
            Load More
          </Button>
        ),
      ]}
    >
      {data.pages.map(page => (
        <List
          key={page.page}
          itemLayout="horizontal"
          dataSource={page.data}
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
      ))}
    </Card>
  );
};
