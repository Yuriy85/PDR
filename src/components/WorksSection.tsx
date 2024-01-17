import { Carousel } from 'react-responsive-carousel';
import { car1, car2, car3, car4 } from '../assets/img';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routesPath } from '../router';

function WorksSection() {
  const [anim, setAnim] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <section className="works">
      <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={500}>
        <div className="works__wrapper">
          <h2>Наши работы</h2>
          <Carousel
            onClickItem={() => navigate(routesPath.works)}
            showThumbs={false}
            infiniteLoop={true}
          >
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
