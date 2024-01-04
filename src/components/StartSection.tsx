import { startPdr } from '../assets/img';

function StartSection() {
  return (
    <section className="start">
      <div className="start__wrapper">
        <div className="start__content">
          <h1>Удаление вмятин без покраски</h1>
          <p>
            Ремонт вмятин без покраски (PDR) - это квалифицированный метод
            удаления вмятин используемый в автомобильной промышленности с
            использованием различных инструментов и методов для полного
            восстановления повреждений до состояния, которое было до повреждения
          </p>
          <button onClick={() => (location.href = '#works')}>
            Посмотреть работы
          </button>
        </div>
        <img className="start__img" src={startPdr} alt="pdr" />
      </div>
    </section>
  );
}

export default StartSection;
