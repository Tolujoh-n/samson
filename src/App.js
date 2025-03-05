import React from "react";
import About from "./components/About";
// import Analysis from "./components/Analysis";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

// Import vendor CSS
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

// Import your main CSS
import "./assets/css/main.css";

const App = () => {
  return (
    <body className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        {/* <Analysis /> */}
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </body>
  );
};

export default App;
