
import { useState } from 'react';
import './App.css';
import BurgerNav from './components/blocks/Header/BurgerNav';
import ContactUsBlock from './components/blocks/ContactUsBlock/ContactUsBlock';
import DescriptionBlock from './components/blocks/DescriptionBlock/DescriptionBlock';
import Header from './components/blocks/Header/Header';
import IntroBlock from './components/blocks/IntroBlock/IntroBlock';
import RoadmapBlock from './components/blocks/RoadmapBlock/RoadmapBlock';
import TokenomicsBlock from './components/blocks/TokenomicsBlock/TokenomicsBlock';
import FaqBlock from './components/blocks/FaqBlock/FaqBlock';
import Footer from './components/blocks/Footer/Footer';

function App() {

  const [navIsOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);

  }

  const closeHandler = () => {
    document.body.style.overflow = 'unset'
    setIsOpen(false);

  }


  return (
    <div className="App">
      <header>
        <Header navIsOpen={navIsOpen} onClose={closeHandler} onOpen={openHandler} />
      </header>
      <main>
        <IntroBlock />
        <DescriptionBlock />
        <TokenomicsBlock />
        <RoadmapBlock />
        <ContactUsBlock />
        <FaqBlock />
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
