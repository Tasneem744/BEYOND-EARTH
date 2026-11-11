
import Navbar from './Components/Navbar';
import HeroSection from './Components/Home';
import MissionOverview from './Components/MissionOverview';
import About from './Components/About';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <MissionOverview />
      <About/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;