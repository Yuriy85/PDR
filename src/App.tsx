import './styles/main.scss';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { routes } from './router';
import routesPath from './router/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path={routesPath.main} element={<Layout />}>
        <Route index element={<Main />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
