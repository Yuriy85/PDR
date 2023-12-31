import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { car1, car2, car3, car4 } from '../assets/img';

function WorksSection() {
  return (
    <section className="pets_section" id="works">
      <div className="pets_content">
        <h2>Наши работы</h2>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div>
            <img src={car1} />
            {/* <p className="legend" id="car-item">
              Legend 1
            </p> */}
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
