import './App.css';
import Companies from './components/companies/Companies';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Residencies from './components/residencies/Residencies';
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import GetStarted from './components/getstarted/GetStarted';
import Footer from './components/footer/Footer';
function App() {
  return (
      <div className='App'>
        <div>
          <div className='white-gradient flexCenter' />
          <Header />
          <Hero />
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
  );
}

export default App;