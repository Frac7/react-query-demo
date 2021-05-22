import UserList from '../UserList';
import InfiniteUserList from '../InfiniteUserList';
import SingleUser from '../SingleUser';

export const sections = [
  {
    key: '0',
    title: 'User List',
    component: <UserList />,
  },
  {
    key: '1',
    title: 'Infinite User List',
    component: <InfiniteUserList />,
  },
  {
    key: '2',
    title: 'Single User',
    component: <SingleUser />,
  },
];
