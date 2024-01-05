import { Carousel } from 'react-responsive-carousel';
import { car1, car2, car3, car4 } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';

function WorksSection() {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="works">
      <CSSTransition in={anim} mountOnEnter classNames="alert" timeout={500}>
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
      </CSSTransition>
    </section>
  );
}

export default WorksSection;
