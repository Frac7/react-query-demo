/* eslint-disable import/no-anonymous-default-export */
import { Card, Avatar, Alert, Skeleton } from 'antd';
import { useQuery } from 'react-query';

const { Meta } = Card;

export default () => {
  const { error, data, isFetched } = useQuery(
    'CachedUser',
    () =>
      fetch('https://reqres.in/api/users/1?delay=3').then(res => res.json()),
    {
      initialData: {
        data: {
          id: 1,
          avatar: 'https://reqres.in/img/faces/1-image.jpg',
        },
      },
    },
  );

  if (error) {
    return <Alert message={error} type="error" />;
  }

  const item = data.data;

  return (
    <Card>
      <Meta
        avatar={<Avatar src={item.avatar} />}
        title={
          isFetched ? `${item.first_name} ${item.last_name}` : <Skeleton />
        }
        description={item.email}
      />
    </Card>
  );
};
