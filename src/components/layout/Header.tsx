import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppDataContext } from '../../context';

function Header() {
  const context = useContext(AppDataContext);
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
            if (context.setShowBurger) {
              context.setShowBurger(!context.showBurger);
            }
          }}
          className={
            context.showBurger
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
            context.showBurger ? 'header__nav header__nav--show' : 'header__nav'
          }
        >
          <ul
            onClick={(event) => {
              if (
                context.setShowBurger &&
                (event.target as HTMLElement).nodeName === 'A'
              ) {
                context.setShowBurger(false);
              }
            }}
          >
            <li className="header__nav-li">
              <NavLink
                onClick={() => window.scrollTo(scrollToTopOptions)}
                to="/"
                className={activeClass}
              >
                Главная
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink
                onClick={() => window.scrollTo(scrollToTopOptions)}
                to="works"
                className={activeClass}
              >
                Наши работы
              </NavLink>
            </li>
            <li className="header__nav-li">
              <NavLink to="price" className={activeClass}>
                Цены
              </NavLink>
            </li>
            <li className="header__nav-li">
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
