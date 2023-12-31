import { useContext } from 'react';
import { AppDataContext } from '../context';

function DarkSection() {
  const context = useContext(AppDataContext);

  return (
    <div
      onClick={() => {
        if (context.setShowBurger) {
          context.setShowBurger(false);
        }
      }}
      className={context.showBurger ? 'dark dark_show' : 'dark'}
    />
  );
}

export default DarkSection;
