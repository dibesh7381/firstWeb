import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

/**
 * Navbar Component
 * Props:
 * - theme: "dark" | "light"
 */
const Navbar = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-black/30 text-white" : "bg-white text-black";
  const linkHover = isDark ? "hover:text-gray-300" : "hover:text-gray-700";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const topBar = useRef(null);
  const middleBar = useRef(null);
  const bottomBar = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Reset nav style when switching to desktop
      if (!mobile) {
        gsap.set(menuRef.current, { clearProps: "all", display: "flex" });
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuRef.current && isMobile) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          display: "flex",
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (menuRef.current) {
              menuRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [isOpen, isMobile]);

  const animateBurger = () => {
    if (!isOpen) {
      gsap.to(topBar.current, { rotate: 45, y: 8, duration: 0.3 });
      gsap.to(middleBar.current, { opacity: 0, duration: 0.2 });
      gsap.to(bottomBar.current, { rotate: -45, y: -8, duration: 0.3 });
    } else {
      gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(middleBar.current, { opacity: 1, duration: 0.2 });
      gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3 });
    }
    setIsOpen(!isOpen);
  };

  return (
  <>
    {/* Dark overlay when mobile menu is open */}
    {isMobile && isOpen && (
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={animateBurger} // optional: clicking outside closes the menu
      />
    )}

    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-black text-white flex items-center justify-between px-6 md:px-12 shadow-md">


      <div className="text-2xl font-bold">BrandLogo</div>

      {/* Mobile Burger Button */}
      <button
        onClick={animateBurger}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        className="md:hidden cursor-pointer"
      >
        <div className="space-y-1 w-6 h-5 relative">
          <span
            ref={topBar}
            className="block h-0.5 w-full bg-current origin-center"
          />
          <span
            ref={middleBar}
            className="block h-0.5 w-full bg-current origin-center"
          />
          <span
            ref={bottomBar}
            className="block h-0.5 w-full bg-current origin-center"
          />
        </div>
      </button>

      {/* Menu */}
      <div
        ref={menuRef}
        className={`${
          isMobile
            ? "flex-col absolute top-16 left-0 w-full px-6 py-2 bg-opacity-90 z-50"
            : "hidden"
        } md:flex md:flex-row md:relative md:top-0 md:left-0 md:w-auto md:space-x-6`}
        style={{
          backgroundColor: isMobile
            ? isDark
              ? "rgba(0, 0, 0, 0.8)"
              : "rgba(255, 255, 255, 0.95)"
            : "transparent",
          overflow: isMobile ? "hidden" : "unset",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <Link to="/" className={`py-2 block ${linkHover}`}>
          Home
        </Link>
        <Link to="/features" className={`py-2 block ${linkHover}`}>
          Features
        </Link>
        <Link to="/about" className={`py-2 block ${linkHover}`}>
          About
        </Link>
        <Link to="/contact" className={`py-2 block ${linkHover}`}>
          Contact
        </Link>
      </div>
    </nav>
  </>
);

};

export default Navbar;

