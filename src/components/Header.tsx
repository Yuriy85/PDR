import { useContext } from 'react';
import { AppDataContext } from '../context';

function Header() {
  const context = useContext(AppDataContext);

  return (
    <header>
      <div className="header_section_main">
        <a className="logo" id="logo" href="#no_scroll">
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
          className={context.showBurger ? 'burger burger_show' : 'burger'}
        >
          <hr />
          <hr />
          <hr />
        </div>
        <nav
          className={context.showBurger ? 'nav_menu nav_menu_show' : 'nav_menu'}
        >
          <ul
            onClick={() => {
              if (context.setShowBurger) {
                context.setShowBurger(false);
              }
            }}
          >
            <li>
              <a href="#no_scroll">Главная</a>
            </li>
            <li>
              <a href="#works">Наши работы</a>
            </li>
            <li>
              <a href="#no_scroll">Цены</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
