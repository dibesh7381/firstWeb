import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import gsap from 'gsap';

const featuresData = [
  {
    title: "Fast Performance",
    description: "Our app is optimized for speed, ensuring a smooth user experience.",
    icon: "⚡",
  },
  {
    title: "Responsive Design",
    description: "Works perfectly on all devices – from mobile to desktop.",
    icon: "📱",
  },
  {
    title: "Secure",
    description: "Built with security best practices for safe user data handling.",
    icon: "🔒",
  },
  {
    title: "Easy to Use",
    description: "Simple UI and UX for both beginners and advanced users.",
    icon: "🎯",
  },
  {
    title: "Modern Stack",
    description: "Built using React, Tailwind CSS, and modern web tools.",
    icon: "🛠️",
  },
  {
    title: "Customizable",
    description: "Easily modify and extend the app to suit your needs.",
    icon: "🎨",
  },
];

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Trim refs in case of hot reload
    cardsRef.current = cardsRef.current.slice(0, featuresData.length);

    // Animate each card
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.4,
      delay: 0.3,
      clearProps: 'all',
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="flex-grow px-6 md:px-16 py-20 pt-32 relative z-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Features</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to build fast, modern, and secure web apps.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all relative z-10"
              style={{ visibility: 'visible' }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;





