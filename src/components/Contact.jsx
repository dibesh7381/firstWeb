import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      setFormData({ username: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="flex-grow flex items-center justify-center px-6 md:px-16 py-12">
  <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Username */}
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.username ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
          }`}
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
          }`}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>

    </div>
  );
};

export default Contact;
