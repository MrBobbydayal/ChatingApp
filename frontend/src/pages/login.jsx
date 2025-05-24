import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setFormData((prev) => ({
        ...prev,
        avatar: files[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, e.g. call an API
    console.log(formData);
    alert('Signup form submitted! Check console for data.');
  };

  return (
    <div className=" flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full space-y-3"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Login
        </h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email / Username
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-3 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

