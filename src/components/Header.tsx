import { useContext } from 'react';
import { AppDataContext } from '../context';

function Header() {
  const context = useContext(AppDataContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" id="logo" href="#no_scroll">
          <p>Fatina St PDR</p>
          <p>Удаление вмятин без покраски</p>
        </a>
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
            onClick={() => {
              if (context.setShowBurger) {
                context.setShowBurger(false);
              }
            }}
          >
            <li className="header__nav-li header__nav-li--show">
              <a href="#no_scroll">Главная</a>
            </li>
            <li className="header__nav-li">
              <a href="#works">Наши работы</a>
            </li>
            <li className="header__nav-li">
              <a href="#no_scroll">Цены</a>
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
