import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { AppDataContext } from '../../context';
import { useState } from 'react';

function Layout() {
  const [error, setError] = useState('');
  const [endVideoId, setEndVideoId] = useState('');

  return (
    <AppDataContext.Provider
      value={{
        error,
        setError,
        endVideoId,
        setEndVideoId,
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppDataContext.Provider>
  );
}
export default Layout;
