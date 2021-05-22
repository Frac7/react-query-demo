import UserList from '../components/UserList';
import InfiniteUserList from '../components/InfiniteUserList';
import CachedUser from '../components/CachedUser';
import CancelUserQuery from '../components/CancelUserQuery';
import UserMutation from '../components/UserMutation';

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
  {
    path: '/cancel-user-query',
    title: 'Cancel User Query',
    component: <CancelUserQuery />,
  },
  {
    path: '/user-mutation',
    title: 'User Mutation',
    component: <UserMutation />,
  },
];
