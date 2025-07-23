import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import CTAButton from "../../components/CTAButton/CTAButton";
import tenpoVideo from "../../assets/video/tenpo.mp4";

export default function Hero() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={tenpoVideo} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -30 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        Tu dinero, simple y seguro
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 0 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        Conoce la nueva forma de manejar tus finanzas con confianza.
        <CTAButton text="Crea tu cuenta" />
      </motion.p>
    </section>
  );
}
