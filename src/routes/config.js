import { listProfiles } from 'modules/rick-morty/actions';
import Loadable from 'react-loadable';
import GlobalLoading from 'views/ui/loading';

const ContainerApp = Loadable({
  loader: () => import('views/containers/app'),
  loading: GlobalLoading,
});

const Dashboard = Loadable({
  loader: () => import('views/screens/dashboard'),
  loading: GlobalLoading,
});

const Profile = Loadable({
  loader: () => import('views/screens/dashboard'),
  loading: GlobalLoading,
});

const routes = [
  {
    path: '/',
    component: ContainerApp,
    actions: [],
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
        actions: [],
      },
    ],
  },
];

export default routes;
