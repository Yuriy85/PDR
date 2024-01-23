import { car1, car2, car3, car4 } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';

function WorkSection() {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="works">
      <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={300}>
        <div className="works__wrapper">
          <h2>Наши работы</h2>
          <Carousel>
            <Carousel.Item>
              <img src={car1} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={car2} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={car3} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={car4} />
            </Carousel.Item>
          </Carousel>
        </div>
      </CSSTransition>
    </section>
  );
}

export default WorkSection;
