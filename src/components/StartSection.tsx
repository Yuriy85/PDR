import { startPdr } from '../assets/img';

function StartSection() {
  return (
    <section className="start_section">
      <div className="start_content">
        <div className="content_1">
          <h1>Удаление вмятин без покраски</h1>
          <p>
            Ремонт вмятин без покраски (PDR) - это квалифицированный метод
            удаления вмятин используемый в автомобильной промышленности с
            использованием различных инструментов и методов для полного
            восстановления повреждений до состояния, которое было до повреждения
          </p>
          <button className="button" onClick={() => (location.href = '#works')}>
            Посмотреть работы
          </button>
        </div>
        <img className="start_pet" src={startPdr} alt="pdr" />
      </div>
    </section>
  );
}

export default StartSection;
