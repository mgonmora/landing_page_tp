import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import './AnimationPhone.css';

export default function PhoneParallax() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalScroll = rect.height + windowHeight;
        const scrolled = windowHeight - rect.top;
        let progress = scrolled / totalScroll;
        progress = Math.min(Math.max(progress, 0), 1);
        setProgress(progress);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, controls]);

  const translateX = -100 + progress * 200;

  return (
    <section
      ref={sectionRef}
      className="phone-parallax-section container"
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 5vw",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1000px",
          height: "1000px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #00D17A -200%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="row">
        <div className="col-12">
          <img
            src="https://cdn.prod.website-files.com/647f4d1c528358bdb9d8ef3e/671aa087bc71db13c7d3c124_iphone-hiper.avif"
            alt="Teléfono"
            className="phone-image"
            style={{
              top: "50%",
              left: "60%",
              width: "30%",
              maxWidth: "50em",
              transform: `translateX(${translateX}px) translateY(-50%)`,
              transition: "transform 0.1s ease-out",
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
        <div className="col-12">
          <div className="phone-content">
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1 }}
            >
              <h2 className="title-tp">Hiper Personal - Hiper Segura</h2>
              <p>
                Tu identidad es única para nosotros. Contamos con Onfido,
                tecnología de clase mundial en verificación de identidad de las
                personas mediante algoritmos de inteligencia artificial.
              </p>
              <p>
                Tanto tu cuenta como tu Tarjeta Tenpo Mastercard tienen los datos
                sensibles cifrados, es decir, se administran y almacenan de forma
                segura. Esto con la finalidad de resguardar tu información personal
                y en consecuencia, tu dinero.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
