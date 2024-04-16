// import Test from "./Test";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="app">
           <Cursor/>
      <section id="Home">
        <NavBar />
        <Hero/>
      </section >

   <section id="Services">
        <Parallax type="services" />
      </section>

      <section><Services /></section>
      
         <section id="Parallax">
        <Parallax type="portfolio" />
        </section>

         <Portfolio type="portfolio" />
      
      <section id="Contact">
        <Contact/>
      </section>

    </div>
  );
}

export default App;
