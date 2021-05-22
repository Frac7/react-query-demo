/* eslint-disable import/no-anonymous-default-export */
import { Card, Avatar, Alert, Button, Skeleton } from 'antd';
import { useQueryClient, useQuery } from 'react-query';

import { endpoint } from './utils';

const { Meta } = Card;

export default () => {
  const queryClient = useQueryClient();
  const handleStop = () => {
    queryClient.cancelQueries('CancelUserQuery');
  };

  const { isLoading, isIdle, error, data } = useQuery(
    'CancelUserQuery',
    endpoint,
  );

  if (error) {
    return <Alert message={error} type="error" />;
  }

  const item = data?.data;

  return (
    <Card
      actions={
        isLoading && [
          <Button disabled={isIdle} onClick={handleStop}>
            Cancel query
          </Button>,
        ]
      }
    >
      <Meta
        avatar={<Avatar src={item?.avatar} />}
        title={
          isLoading ? (
            <Skeleton />
          ) : (
            `${(item && item.first_name) || ''} ${
              (item && item.last_name) || ''
            }`
          )
        }
        description={item?.email}
      />
    </Card>
  );
};
