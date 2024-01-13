import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { AppDataContext } from '../../context';
import { useEffect, useState } from 'react';

function Layout() {
  const [showBurger, setShowBurger] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    showBurger
      ? body?.classList.add('body--show')
      : body?.classList.remove('body--show');
    body;
  }, [showBurger]);

  return (
    <AppDataContext.Provider value={{ showBurger, setShowBurger }}>
      <Header />
      <main>
        <Outlet />
        <div
          onClick={() => (showBurger ? setShowBurger(false) : null)}
          className={showBurger ? 'dark dark--show' : 'dark'}
        />
      </main>
      <Footer />
    </AppDataContext.Provider>
  );
}
export default Layout;
