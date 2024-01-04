import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';
import StartSection from './components/StartSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import DarkSection from './components/DarkSection';
import { AppDataContext } from './context';
import { useEffect, useState } from 'react';
import DescriptionSection from './components/DescriptionSection';

function App() {
  const [showBurger, setShowBurger] = useState(false);
  const body = document.querySelector('body');
  useEffect(() => {
    showBurger
      ? body?.classList.add('body--show')
      : body?.classList.remove('body--show');
    body;
  }, [showBurger]);
  return (
    <AppDataContext.Provider value={{ showBurger, setShowBurger }}>
      <Header />
      <main>
        <StartSection />
        <AboutSection />
        <WorksSection />
        <DescriptionSection />
        <DarkSection />
      </main>
      <Footer />
    </AppDataContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
