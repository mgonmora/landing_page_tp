import { useEffect, useState } from 'react';
import './ParallaxSection.css';

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="parallax-content">
        <h2>Explora nuevas ideas</h2>
        <p>Este contenido se desplaza más lentamente que el scroll para dar un efecto elegante.</p>
      </div>
    </section>
  );
}