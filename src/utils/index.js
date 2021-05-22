import UserList from '../components/UserList';
import InfiniteUserList from '../components/InfiniteUserList';
import SingleUser from '../components/SingleUser';

export const sections = [
  {
    path: '/user-list',
    title: 'User List',
    component: <UserList />,
  },
  {
    path: '/infinite-user-list',
    title: 'Infinite User List',
    component: <InfiniteUserList />,
  },
  {
    path: '/single-user',
    title: 'Single User',
    component: <SingleUser />,
  },
];
