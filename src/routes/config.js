import Loadable from 'react-loadable';
import GlobalLoading from 'views/ui/loading';
import { getProfile, listProfiles } from 'modules/rick-morty/actions';

const ContainerApp = Loadable({
  loader: () => import('views/containers/app'),
  loading: GlobalLoading,
});

const Dashboard = Loadable({
  loader: () => import('views/screens/dashboard'),
  loading: GlobalLoading,
});

const Profile = Loadable({
  loader: () => import('views/screens/profile'),
  loading: GlobalLoading,
});

const routes = [
  {
    path: '/',
    component: ContainerApp,
    published: true,
    routes: [
      {
        path: '/',
        component: Dashboard,
        exact: true,
        actions: [listProfiles],
      },
      {
        path: '/profile/:id',
        component: Profile,
        exact: true,
        actions: [getProfile],
      },
    ],
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
