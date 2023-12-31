import { beforeAfter } from '../assets/img';

function AboutSectionTwo() {
  return (
    <section className="about_section">
      <div className="about_content about_content--two">
        <div className="content_2">
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
        <img className="about_pets" src={beforeAfter} alt="pets" />
      </div>
    </section>
  );
}

export default AboutSectionTwo;
