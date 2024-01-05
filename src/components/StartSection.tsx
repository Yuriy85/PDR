import { useNavigate } from 'react-router-dom';
import { startPdr } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function StartSection() {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="start">
      <div className="start__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="alert" timeout={500}>
          <div className="start__content">
            <h1>Удаление вмятин без покраски</h1>
            <p>
              Ремонт вмятин без покраски (PDR) - это квалифицированный метод
              удаления вмятин используемый в автомобильной промышленности с
              использованием различных инструментов и методов для полного
              восстановления повреждений до состояния, которое было до
              повреждения
            </p>
            <button onClick={() => navigate('works')}>Посмотреть работы</button>
          </div>
        </CSSTransition>
        <CSSTransition in={anim} mountOnEnter classNames="alert2" timeout={500}>
          <img className="start__img" src={startPdr} alt="pdr" />
        </CSSTransition>
      </div>
    </section>
  );
}

export default StartSection;
