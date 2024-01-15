import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppDataContext } from '../../context';
import routesPath from '../../router/routes';

function Header() {
  const { showBurger, setShowBurger } = useContext(AppDataContext);
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'header__nav-li--show' : '';
  };
  const scrollToTopOptions: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: 'smooth',
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" id="logo" to="/">
          <p>Fatina St PDR</p>
          <p>Удаление вмятин без покраски</p>
        </Link>
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (setShowBurger) {
              setShowBurger(!showBurger);
            }
          }}
          className={
            showBurger
              ? 'header__burger header__burger--show'
              : 'header__burger'
          }
        >
          <hr />
          <hr />
          <hr />
        </div>
        <nav
          className={
            showBurger ? 'header__nav header__nav--show' : 'header__nav'
          }
        >
          <ul
            onClick={(event) => {
              if (
                setShowBurger &&
                (event.target as HTMLElement).nodeName === 'A'
              ) {
                setShowBurger(false);
              }
            }}
          >
            <li className="header__nav-li">
              <NavLink
                onClick={() => window.scrollTo(scrollToTopOptions)}
                to={routesPath.main}
                className={activeClass}
              >
                Главная
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink
                onClick={() => window.scrollTo(scrollToTopOptions)}
                to={routesPath.works}
                className={activeClass}
              >
                Наши работы
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink to={routesPath.price} className={activeClass}>
                Цены
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink to={routesPath.contacts} className={activeClass}>
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
