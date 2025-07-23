import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import ParallaxSection from "./sections/ParallaxSection/ParallaxSection";
import AnimationPhone from "./sections/AnimationPhone/AnimationPhone";
import Benefits from "./sections/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <section id="hero">
          <Hero />
        </section>

        <section id="ideas">
          <ParallaxSection />
        </section>

        <section id="cta">
          <AnimationPhone />
        </section>

        <section
          id="benefits"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9fafb",
          }}
        >
          <Benefits />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
