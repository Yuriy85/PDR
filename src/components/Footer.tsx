import { porschePng } from '../assets/img';
import { phoneSvg, pointSvg, instSvg } from '../assets/svg';
import { ReactSVG } from 'react-svg';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function Footer() {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <footer className="footer" id="contact">
      <div className="footer__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="alert" timeout={500}>
          <div className="footer__contacts">
            <h2>Контакты:</h2>
            <a href="https://www.instagram.com/galushkodmitriy?igsh=MXNnOXQzMm00dnNlbQ==">
              <ReactSVG className="footer__icon" src={instSvg} />
              <span>galushkodmitriy</span>
            </a>
            <a href="tel:+375336913696">
              <ReactSVG className="footer__icon" src={phoneSvg} />
              <span>+375-33-691-36-96</span>
            </a>
            <a
              href="https://maps.app.goo.gl/QKu5BJJGBTvsiY947"
              target="_blank"
              rel="noreferrer"
            >
              <ReactSVG className="footer__icon" src={pointSvg} />
              <span>Гаражный массив по ул. Фатина, г. Могилев</span>
            </a>
          </div>
        </CSSTransition>
        <CSSTransition in={anim} mountOnEnter classNames="alert2" timeout={500}>
          <img className="footer__img" src={porschePng} alt="car" />
        </CSSTransition>
      </div>
    </footer>
  );
}

export default Footer;
