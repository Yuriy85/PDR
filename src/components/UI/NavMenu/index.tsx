import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.css';
type NavBar = {
  name: string;
  link: string;
}[];

const NavMenu = function ({ navLinks, ...props }: { navLinks: NavBar; [x: string]: unknown }) {
  const body = document.querySelector('body');
  const [showBurger, setShowBurger] = useState(false);
  const burgerHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (setShowBurger) {
      setShowBurger(!showBurger);
    }
  };
  const activeClass = ({ isActive }: { isActive: boolean }) => (isActive ? classes.navLiShow : '');

  useEffect(() => {
    showBurger ? body?.classList.add(classes.bodyBlock) : body?.classList.remove(classes.bodyBlock);
    body;
  }, [showBurger]);

  return (
    <div {...props}>
      <div
        onClick={burgerHandler}
        className={showBurger ? [classes.burger, classes.burgerShow].join(' ') : classes.burger}
      >
        <hr /> <hr /> <hr />
      </div>
      <nav className={showBurger ? [classes.nav, classes.navShow].join(' ') : classes.nav}>
        <ul
          onClick={(event) => {
            if (setShowBurger && (event.target as HTMLElement).nodeName === 'A') {
              setShowBurger(false);
            }
          }}
        >
          {navLinks.map(({ name, link }) => (
            <li key={name} className={classes.navLi}>
              <NavLink to={link} className={activeClass}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={() => (showBurger ? setShowBurger(false) : null)}
        className={showBurger ? [classes.dark, classes.darkShow].join(' ') : classes.dark}
      />
    </div>
  );
};

export default NavMenu;
