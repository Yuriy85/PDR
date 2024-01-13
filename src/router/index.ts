import Works from '../pages/Works';
import Price from '../pages/Price';
import Error from '../pages/Error';
import routesPath from './routes';

export const routes = [
  { path: routesPath.works, component: Works },
  { path: routesPath.price, component: Price },
  { path: '*', component: Error },
];
