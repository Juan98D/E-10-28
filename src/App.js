import './App.css';
//import Product from './components/Product'
import Navbar from './components/Navbar';
import Slider from './components/Slider'
import Products from './components/Products';
import Persona from './components/Persona';
import Blog from './components/Blog'




function App() {
  return (
    <div className="App">
      
      <Navbar id = "Navbar"/>
      <div className= "slider">
        <Slider/>
      </div>
      <div className="titulos">
      <h1 id='portafolio'> PORTAFOLIO </h1>
      </div>
      <div className = "products">
        <Products id = "Products"/>
      </div>
      <div className="titulos">
        <h1 id = "equipo">EQUIPO</h1>
      </div>
      <div className = "persona">
        <Persona />
      </div>
      <div className="titulos">
        <h1>NOTICIAS</h1>
      </div>
      <div className="blog">
        <Blog />
      </div>

      <footer id="footer">
        <div id="conte-footer">
          <p>Derechos reservados</p>
          <p>|</p>
          <p>Terminos y condiciones de uso</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
