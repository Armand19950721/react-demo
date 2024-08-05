import { createBrowserRouter, Navigate } from 'react-router-dom';
import LazyLoadRoutes from './components/LazyLoadRoutes';

const router_path = {
  index: '/',
  login: '/login',
  member: '/member',
  gallery: '/picbot/gallery',
  contextDemo: '/context-demo',
  reduxDemo: '/redux-demo',
};

const routers = createBrowserRouter([
  {
    path: router_path.index,
    element: <Navigate to={router_path.login} />,
  },
  {
    path: router_path.login,
    element: <LazyLoadRoutes componentName="Login" />,
  },
  {
    path: router_path.member,
    element: <LazyLoadRoutes componentName="Member" />,
  },
  {
    path: router_path.gallery,
    element: <LazyLoadRoutes componentName="Gallery" />,
  },
  {
    path: router_path.contextDemo,
    element: <LazyLoadRoutes componentName="ContextDemo" />,
  },
  {
    path: router_path.reduxDemo,
    element: <LazyLoadRoutes componentName="ReduxDemo" />,
  },
]);

export { router_path, routers };