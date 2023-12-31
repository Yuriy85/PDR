import { porschePng } from '../assets/img';
import { phoneSvg, pointSvg, instSvg } from '../assets/svg';
import { ReactSVG } from 'react-svg';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer_content">
        <div className="contacts">
          <h2>Контакты:</h2>
          <a href="https://www.instagram.com/galushkodmitriy?igsh=MXNnOXQzMm00dnNlbQ==">
            <ReactSVG className="logo_icon" src={instSvg} />
            <span>galushkodmitriy</span>
          </a>
          <a href="tel:+375336913696">
            <ReactSVG className="logo_icon" src={phoneSvg} />
            <span>+375-33-691-36-96</span>
          </a>
          <a
            href="https://maps.app.goo.gl/QKu5BJJGBTvsiY947"
            target="_blank"
            rel="noreferrer"
          >
            <ReactSVG className="logo_icon" src={pointSvg} />
            <span>Гаражный массив по ул. Фатина, г. Могилев</span>
          </a>
        </div>
        <img className="footer_pet" src={porschePng} alt="pet" />
      </div>
    </footer>
  );
}

export default Footer;
