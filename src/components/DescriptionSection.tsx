import { beforeAfter } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function DescriptionSection() {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);
  return (
    <section className="description">
      <div className="description__wrapper">
        <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={300}>
          <div className="description__content">
            <h2>Cохранность ЛКП</h2>
            <p>
              Технология PDR позволяет производить ремонт, сохраняя при этом заводской окрас. Тем
              самым ваш автомобиль не переходит в разряд битых и окрашенных. Ваш автомобиль никогда
              не попадет в отчеты о ремонте.
            </p>
            <p>
              Если на кузове вашего автомобиля, после каких-либо происшествий, появилась вмятина, мы
              будем рады помочь вам в решении этой проблемы. Наши специалисты смогут устранить
              различные повреждения на вашем авто.
            </p>
          </div>
        </CSSTransition>
        <CSSTransition in={anim} mountOnEnter classNames="--right" timeout={700}>
          <img className="description__img" src={beforeAfter} alt="pdr" />
        </CSSTransition>
      </div>
    </section>
  );
}

export default DescriptionSection;
