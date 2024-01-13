import { useNavigate } from 'react-router-dom';
import { notFound } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import routesPath from '../router/routes';

function Error({ error }: { error?: string }) {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="start start--error">
      <div className="start__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={500}>
          <div className="start__content">
            <h1>Упс. Что-то пошло не так.</h1>
            <p>{error ? error : 'Проверьте пожалуйста адрес!'}</p>
            <button
              className="start__button"
              onClick={() => navigate(routesPath.main)}
            >
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
