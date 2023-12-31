import { tools } from '../assets/img';

function AboutSection() {
  return (
    <section className="about_section">
      <div className="about_content">
        <img className="about_pets" src={tools} alt="pets" />
        <div className="content_2">
          <h2>Экономия средств и времени</h2>
          <p>
            Не нужны шпатлевки и покраска. Мы используем различные
            специализированные инструменты и клеи, чтобы вернуть вмятину в
            состояние, которое было до повреждения. Ремонт по технологии PDR
            получается существенно дешевле!
          </p>
          <p>
            В среднем на ремонт вмятины уходит от 30 минут до 3 часов. Сложные
            повреждения могут занять весь день. Та же вмятина в кузовном цехе
            может занять 48 часов, а обработка все равно будет хуже, чем
            вмятина, отремонтированная по технологии PDR.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
