import { useNavigate } from 'react-router-dom';
import { reconstruction } from '../assets/img';
import routesPath from '../router/routes';

function Price() {
  const navigate = useNavigate();

  return (
    <section className="start start--price">
      <div className="start__wrapper">
        <div className="start__content">
          <h1>Извините. Страница c ценами еще не готова!</h1>
          <button
            className="start__button"
            onClick={() => navigate(routesPath.main)}
          >
            На главную...
          </button>
        </div>
        <img className="start__img" src={reconstruction} alt="pdr" />
      </div>
    </section>
  );
}

export default Price;
