import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sectionone from './Components/Sectionone';
import Sectiontwo from './Components/Sectiontwo';
import Modules from './Components/Modules';
import Pricing from './Components/Pricing';
import Contactus from './Components/Contactus';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sectionone />
      <Sectiontwo />
      <Modules/>
      <Pricing />
      <Contactus />
     
      <Footer />
    </div>
  );
}

export default App;


