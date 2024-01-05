import Works from '../pages/Works';
import Price from '../pages/Price';
import Error from '../pages/Error';

export const routes = [
  { path: 'works', component: Works },
  { path: 'price', component: Price },
  { path: '*', component: Error },
];
