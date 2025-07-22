import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import gsap from 'gsap';

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="flex-grow px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are a passionate team of developers and designers dedicated to building modern, fast, and secure web applications using the latest technologies like React and Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Image Section */}
          <img
            ref={imageRef}
            style={{ opacity: 1 }}
            src="https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society.jpg"
            alt="Our Team"
            className="w-full h-auto rounded-xl shadow-lg"
          />

          {/* Text Section */}
          <div ref={textRef} style={{ opacity: 1 }}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Our mission is to empower developers by creating easy-to-use, well-structured web tools and educational resources. We believe in simplicity, performance, and accessibility.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clean and maintainable codebase</li>
              <li>Focus on performance and accessibility</li>
              <li>Always up-to-date with latest web trends</li>
              <li>Developer-first documentation and support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


