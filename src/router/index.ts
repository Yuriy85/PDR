import Works from '../pages/Works';
import Price from '../pages/Price';
import Error from '../pages/Error';
import Contacts from '../pages/Contacts';

export const routesPath = {
  main: '/',
  works: '/works',
  price: '/price',
  error: '/error',
  contacts: '/contacts',
};

export const routes = [
  { path: routesPath.works, component: Works },
  { path: routesPath.price, component: Price },
  { path: routesPath.contacts, component: Contacts },
  { path: '*', component: Error },
];
