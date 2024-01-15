import { useEffect, useState } from 'react';
import classes from './index.module.css';

function ScrollToTopButton({ className = '', showHeight = 1000 }) {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    const changeScrollToTop = () => {
      if (window.pageYOffset > showHeight) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', changeScrollToTop);
    return () => window.removeEventListener('scroll', changeScrollToTop);
  }, []);
  if (!showHeight) {
    return <></>;
  }

  const scrollToOptions: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: 'smooth',
  };

  return (
    <div
      onClick={() => {
        window.scrollTo(scrollToOptions);
      }}
      className={
        !scrollToTop
          ? [className, classes.button].join(' ')
          : [className, classes.button, classes.buttonShow].join(' ')
      }
    >
      <hr className={classes.firstHr} />
      <hr className={classes.secondHr} />
    </div>
  );
}

export default ScrollToTopButton;
