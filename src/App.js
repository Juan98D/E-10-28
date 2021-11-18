import './App.css';
//import Product from './components/Product'
import Navbar from './components/Navbar';
import Slider from './components/Slider'
import Products from './components/Products';
import Persona from './components/Persona'



function App() {
  return (
    <div className="App">
      
      <Navbar id = "Navbar"/>
      <div className= "slider">
        <Slider/>
      </div>
      <div className = "products">
        <h1> PORTAFOLIO </h1>
        <Products id = "Products"/>
      </div>
      <div>
        <h1>EQUIPO</h1>
      </div>
      <div className = "persona">
        <Persona />
      </div>
    </div>
    
  );
}

export default App;
