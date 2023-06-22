
import { useState } from 'react';
import './App.css';
import BurgerNav from './components/blocks/BurgerNav';
import ContactUsBlock from './components/blocks/ContactUsBlock';
import DescriptionBlock from './components/blocks/DescriptionBlock';
import Header from './components/blocks/Header';
import IntroBlock from './components/blocks/IntroBlock';
import RoadmapBlock from './components/blocks/RoadmapBlock';
import TokenomicsBlock from './components/blocks/TokenomicsBlock';
import FaqBlock from './components/blocks/FaqBlock/FaqBlock';
import Footer from './components/blocks/Footer';

function App() {

  const [navIsOpen, setIsOpen] = useState(false);

  const openHandler = () => {
      setIsOpen(true);

  }

  const closeHandler = () => {
    setIsOpen(false);

}


  return (
    <div className="App">
      <Header onOpen={openHandler}/>
      {navIsOpen && <BurgerNav onClose={closeHandler}/>}
      <IntroBlock/>
      <DescriptionBlock/>
      <TokenomicsBlock/>
      <RoadmapBlock/>
      <ContactUsBlock/>
      <FaqBlock/>
      <Footer/>
    
    </div>
  );
}

export default App;
