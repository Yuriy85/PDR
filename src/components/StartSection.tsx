import { useNavigate } from 'react-router-dom';
import { startPdr } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import routesPath from '../router/routes';
import BrandButton from './UI/BrandButton';

function StartSection() {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="start">
      <div className="start__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={500}>
          <div className="start__content">
            <h1>Удаление вмятин без покраски</h1>
            <p>
              Ремонт вмятин без покраски (PDR) - это квалифицированный метод
              удаления вмятин используемый в автомобильной промышленности с
              использованием различных инструментов и методов для полного
              восстановления повреждений до состояния, которое было до
              повреждения
            </p>
            <BrandButton onClick={() => navigate(routesPath.works)}>
              Посмотреть работы
            </BrandButton>
          </div>
        </CSSTransition>
        <CSSTransition
          in={anim}
          mountOnEnter
          classNames="--right"
          timeout={500}
        >
          <img className="start__img" src={startPdr} alt="pdr" />
        </CSSTransition>
      </div>
    </section>
  );
}

export default StartSection;
