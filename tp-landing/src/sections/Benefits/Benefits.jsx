import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const benefits = [
  { icon: "bi-piggy-bank", text: "Sin comisiones ocultas" },
  { icon: "bi-arrow-left-right", text: "Transferencias gratuitas" },
  { icon: "bi-credit-card", text: "Tarjeta virtual y física" },
  { icon: "bi-headset", text: "Atención al cliente 24/7" },
  { icon: "bi-phone", text: "Control total desde la app" },
  { icon: "bi-phone-flip", text: "Recargas sin costo" },
  { icon: "bi-gift", text: "Descuentos exclusivos" },
  { icon: "bi-shield-lock", text: "Seguridad de primer nivel" },
  { icon: "bi-file-earmark-text", text: "Pagos de cuentas fácil" },
  { icon: "bi-globe", text: "Internacional sin drama" },
  { icon: "bi-cash-coin", text: "Retiro de efectivo" },
  { icon: "bi-bar-chart", text: "Gestión de gastos" },
];

function BenefitCard({ icon, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const controlsPadre = useAnimation();
  const controlsIcono = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsPadre.start({ opacity: 1, y: 0 });
    } else {
      controlsPadre.start({ opacity: 0, y: 30 });
    }
  }, [isInView, controlsPadre]);

  const handleHoverStart = () => {
    controlsPadre.start({ scale: 1.2, rotate: 0, transition: { duration: 0.3 } });
    controlsIcono.start({
      rotate: [0, 15, -15, 10, -10, 0],
      scale: 1.3,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    controlsPadre.start({ scale: 1, rotate: 0, transition: { duration: 0.3 } });
    controlsIcono.start({
      rotate: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      ref={ref}
      animate={controlsPadre}
      initial={{ opacity: 0, y: 30, scale: 1, rotate: 0 }}
      className="p-3 border border-success rounded h-100 d-flex flex-column align-items-center justify-content-center"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ cursor: "pointer" }}
    >
      <motion.div animate={controlsIcono} style={{ marginBottom: "0.5rem" }}>
        <i className={`bi ${icon}`} style={{ fontSize: "2rem", color: "#00D17A" }}></i>
      </motion.div>

      <span>{text}</span>
    </motion.div>
  );
}

export default function Benefit() {
  return (
    <section className="benefits">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Beneficios de Tenpo</h2>
          </div>
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-6 g-4 text-center">
              {benefits.map((benefit, index) => (
                <div className="col" key={index}>
                  <BenefitCard icon={benefit.icon} text={benefit.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
