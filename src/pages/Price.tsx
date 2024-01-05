import { useNavigate } from 'react-router-dom';
import { reconstruction } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function Price() {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section style={{ minHeight: '100vh' }} className="start">
      <div className="start__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="alert" timeout={500}>
          <div style={{ minHeight: 'auto' }} className="start__content">
            <h1 style={{ fontSize: '2rem' }}>
              Извините. Страница c ценами еще не готова!
            </h1>
            <button onClick={() => navigate('/')}>На главную...</button>
          </div>
        </CSSTransition>
        <CSSTransition in={anim} mountOnEnter classNames="alert2" timeout={500}>
          <img className="start__img" src={reconstruction} alt="pdr" />
        </CSSTransition>
      </div>
    </section>
  );
}

export default Price;
