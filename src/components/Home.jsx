import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-12 bg-gray-50 flex-grow">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
            alt="React Developer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Build Modern Web Apps with React
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Learn how to create scalable, responsive, and interactive web applications using React and modern tools.
          </p>
          <Link to="/get-started">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;



