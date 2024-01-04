import { Carousel } from 'react-responsive-carousel';
import { car1, car2, car3, car4 } from '../assets/img';

function WorksSection() {
  return (
    <section className="works" id="works">
      <div className="works__wrapper">
        <h2>Наши работы</h2>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div>
            <img src={car1} />
          </div>
          <div>
            <img src={car2} />
          </div>
          <div>
            <img src={car3} />
          </div>
          <div>
            <img src={car4} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default WorksSection;
