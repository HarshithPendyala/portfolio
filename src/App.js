
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Skills from './PortfolioContainer/Skills/Skills';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import  Projects  from './PortfolioContainer/Projects/Projects';
import { Navigationbar } from './PortfolioContainer/Navbar/Navbar';
import { ParticleBackground } from './PortfolioContainer/particleBackground';
import Footer from './PortfolioContainer/Footer';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';


function App() {

  return (
    <>

    <div className='app'>
      <Navigationbar/>
      <ParticleBackground/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <ContactMe/> 
        <Footer/>
      </div>
    </>
  );
}

export default App;
