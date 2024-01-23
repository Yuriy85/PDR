import StartSection from '../components/StartSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import DescriptionSection from '../components/DescriptionSection';
import ScrollToTopButton from '../components/UI/ScrollTopButton';

function Main() {
  return (
    <div className="home">
      <StartSection />
      <AboutSection />
      <WorkSection />
      <DescriptionSection />
      <ScrollToTopButton className="home__icon-to-top" />
    </div>
  );
}

export default Main;
