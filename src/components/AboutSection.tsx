import { tools } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function AboutSection() {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true)
  }, [])

  return (
    <section className="about">
      <div className="about__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={300}>
          <img className="about_img" src={tools} alt="pdr tools" />
        </CSSTransition>
        <CSSTransition in={anim} mountOnEnter classNames="--right" timeout={700}>
          <div className="about__content">
            <h2>Экономия средств и времени</h2>
            <p>
              Не нужны шпатлевки и покраска. Мы используем различные специализированные инструменты
              и клеи, чтобы вернуть вмятину в состояние, которое было до повреждения. Ремонт по
              технологии PDR получается существенно дешевле!
            </p>
            <p>
              В среднем на ремонт вмятины уходит от 30 минут до 3 часов. Сложные повреждения могут
              занять весь день. Та же вмятина в кузовном цехе может занять 48 часов, а обработка все
              равно будет хуже, чем вмятина, отремонтированная по технологии PDR.
            </p>
          </div>
        </CSSTransition>
      </div>
    </section>
  );
}

export default AboutSection;
