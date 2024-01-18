import { Link } from 'react-router-dom';
import { routesPath } from '../../router';
import NavMenu from '../UI/NavMenu';

function Header() {
  const navLinks = [
    { name: 'Главная', link: routesPath.main },
    { name: 'Наши работы', link: routesPath.works },
    { name: 'Цены', link: routesPath.price },
    { name: 'Контакты', link: routesPath.contacts },
  ];
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" id="logo" to="/">
          <p>Fatina St PDR</p>
          <p>Удаление вмятин без покраски</p>
        </Link>
        <NavMenu navLinks={navLinks} className="header__nav-menu" />
      </div>
    </header>
  );
}

export default Header;
