import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Manifesto";
import ForArtists from "./components/ForArtists";
import ForBrands from "./components/ForBrands";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Update title
    document.title = "vi$ual";

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Vision />
      <ForArtists />
      <ForBrands />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
