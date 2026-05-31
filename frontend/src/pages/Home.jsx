import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Amenities from "../components/Amenities";
import QuickAccess from "../components/QuickAccess";
import CTASection from "../components/CTASection";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Amenities />
      <QuickAccess />
      <CTASection />
    </>
  );
}