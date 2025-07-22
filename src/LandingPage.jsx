import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  const menuRef = useRef(null);
  const topBar = useRef(null);
  const middleBar = useRef(null);
  const bottomBar = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      subTextRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      gsap.to(topBar.current, { rotate: 45, y: 6, duration: 0.3 });
      gsap.to(middleBar.current, { opacity: 0, duration: 0.2 });
      gsap.to(bottomBar.current, { rotate: -45, y: -6, duration: 0.3 });
    } else {
      gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(middleBar.current, { opacity: 1, duration: 0.2 });
      gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3 });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk=')",
      }}
    >
      <Navbar/>

      {/* Hero */}
      <div className="flex items-center justify-center text-center h-screen px-4">
        <div>
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold mb-4 opacity-0"
          >
            Welcome to Our Site
          </h1>
          <p ref={subTextRef} className="text-lg md:text-xl mb-6 opacity-0">
            We create beautiful responsive web experiences.
          </p>
          <button
            
            ref={buttonRef}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold opacity-0"
          >
            <Link to="/home">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;






