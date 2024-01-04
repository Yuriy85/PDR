import { beforeAfter } from '../assets/img';

function DescriptionSection() {
  return (
    <section className="description">
      <div className="description__wrapper">
        <div className="description__content">
          <h2>Cохранность ЛКП</h2>
          <p>
            Технология PDR позволяет производить ремонт, сохраняя при этом
            заводской окрас. Тем самым ваш автомобиль не переходит в разряд
            битых и окрашенных. Ваш автомобиль никогда не попадет в отчеты о
            ремонте.
          </p>
          <p>
            Если на кузове вашего автомобиля, после каких-либо происшествий,
            появилась вмятина, мы будем рады помочь вам в решении этой проблемы.
            Наши специалисты смогут устранить различные повреждения на вашем
            авто.
          </p>
        </div>
        <img className="description__img" src={beforeAfter} alt="pdr" />
      </div>
    </section>
  );
}

export default DescriptionSection;
