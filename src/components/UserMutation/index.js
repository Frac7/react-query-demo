/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useMemo, useState } from 'react';

import {
  Row,
  Col,
  Card,
  Avatar,
  Alert,
  Skeleton,
  Button,
  Typography,
} from 'antd';
import { useQuery, useQueryClient, useMutation } from 'react-query';

const { Meta } = Card;
const { Paragraph } = Typography;

export default () => {
  const [name, setName] = useState('');

  const queryClient = useQueryClient();
  const {
    isLoading: isQueryLoading,
    error: queryError,
    data: queryData,
  } = useQuery('SingleUser', () =>
    fetch('https://reqres.in/api/users/1?delay=3').then(res => res.json()),
  );
  const {
    isLoading: isMutationLoading,
    error: mutationError,
    data: mutationData,
    ...mutation
  } = useMutation(
    () =>
      fetch('https://reqres.in/api/users/1?delay=3', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: name,
        }),
      }).then(res => res.json()),
    {
      onSuccess: newData =>
        queryClient.setQueryData('SingleUser', old => ({ ...old, ...newData })),
    },
  );

  const item = useMemo(
    () => ({ ...queryData?.data, ...mutationData }),
    [queryData, mutationData],
  );
  useEffect(() => {
    if (item) {
      setName(item.first_name);
    }
  }, [item]);
  const handleMutate = () => mutation.mutate({ ...item, full_name: name });

  if (queryError || mutationError) {
    return <Alert message={queryError || mutationError} type="error" />;
  }

  return (
    <Row gutter={[0, 8]}>
      <Col xs={24}>
        {!isQueryLoading && !isMutationLoading && (
          <Alert
            message={`Fetched username: ${item?.first_name}`}
            type="info"
          />
        )}
      </Col>
      <Col xs={24}>
        <Card
          actions={
            !isQueryLoading && [
              <Button
                onClick={handleMutate}
                loading={isMutationLoading}
                disabled={!name}
              >
                Update
              </Button>,
            ]
          }
        >
          <Meta
            avatar={<Avatar src={item?.avatar} />}
            title={
              isQueryLoading || isMutationLoading ? (
                <Skeleton />
              ) : (
                <Paragraph editable={{ onChange: setName }}>{name}</Paragraph>
              )
            }
            description={item?.email}
          />
        </Card>
      </Col>
    </Row>
  );
};
