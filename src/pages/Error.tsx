import { useNavigate } from 'react-router-dom';
import { notFound } from '../assets/img';

function Error() {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: '100vh' }} className="start">
      <div className="start__wrapper">
        <div style={{ minHeight: 'auto' }} className="start__content">
          <h1 style={{ fontSize: '2rem' }}>
            Упс. Что-то пошло не так. Проверьте адрес пожалуйста!
          </h1>
          <button onClick={() => navigate('/')}>На главную...</button>
        </div>
        <img className="start__img" src={notFound} alt="pdr" />{' '}
      </div>
    </section>
  );
}

export default Error;
