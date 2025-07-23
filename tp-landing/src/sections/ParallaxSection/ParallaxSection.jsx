import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CTAButton from "../../components/CTAButton/CTAButton";
import "./ParallaxSection.css";

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, controls]);

  return (
    <section className="parallax-section">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${offsetY * -0.2}px)` }}
      />
      <div className="parallax-content">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <h2>Haz de todo sin salir de tu App</h2>
          <CTAButton text="Descárgala aquí " />
        </motion.div>
      </div>
    </section>
  );
}
