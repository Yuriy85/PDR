import { useNavigate } from 'react-router-dom';
import { reconstruction } from '../assets/img';

function Price() {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: '100vh' }} className="start">
      <div className="start__wrapper">
        <div style={{ minHeight: 'auto' }} className="start__content">
          <h1 style={{ fontSize: '2rem' }}>
            Извините. Страница c ценами еще не готова!
          </h1>
          <button className="start__button" onClick={() => navigate('/')}>
            На главную...
          </button>
        </div>
        <img className="start__img" src={reconstruction} alt="pdr" />
      </div>
    </section>
  );
}

export default Price;
