
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import  Projects  from './PortfolioContainer/Projects/Projects';
import { Navigationbar } from './PortfolioContainer/Navbar/Navbar';
import { ParticleBackground } from './PortfolioContainer/particleBackground';

function App() {

  return (
    <>
      <Navigationbar/>
    <div className='app'>
      <ParticleBackground/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <ContactMe/> 
      </div>
    </>
  );
}

export default App;
