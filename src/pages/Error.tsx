import { useNavigate } from 'react-router-dom';
import { notFound } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function Error({ error }: { error?: string }) {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section style={{ minHeight: '100vh' }} className="start">
      <div className="start__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={500}>
          <div style={{ minHeight: 'auto' }} className="start__content">
            <h1 style={{ fontSize: '2rem' }}>Упс. Что-то пошло не так.</h1>
            <p>{error ? error : 'Проверьте пожалуйста адрес!'}</p>
            <button className="start__button" onClick={() => navigate('/')}>
              На главную...
            </button>
          </div>
        </CSSTransition>
        <CSSTransition
          in={anim}
          mountOnEnter
          classNames="--right"
          timeout={500}
        >
          <img className="start__img" src={notFound} alt="pdr" />
        </CSSTransition>
      </div>
    </section>
  );
}

export default Error;
