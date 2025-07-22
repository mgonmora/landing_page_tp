import Header from './components/Header';
import Hero from './sections/Hero';
import ParallaxSection from './sections/ParallaxSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '140px' }}>
        <section id="hero">
          <Hero />
        </section>

        <section id="benefits">
          <ParallaxSection />
        </section>

        <section id="cta">
          <Hero />
        </section>

        <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contacto</h2>
        </section>
      </div>
    </>
  );
}

export default App;