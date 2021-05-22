import UserList from '../components/UserList';
import InfiniteUserList from '../components/InfiniteUserList';
import CachedUser from '../components/CachedUser';

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
    path: '/cached-user',
    title: 'Cached User',
    component: <CachedUser />,
  },
];
