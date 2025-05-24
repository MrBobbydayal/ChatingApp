import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    number: '',
    email: '',
    fullname: '',
    username: '',
    password: '',
    avatar: null,
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
    <div className=" flex items-center justify-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full space-y-2"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Create Account
        </h2>

        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="+1234567890"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
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
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="john_doe"
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

        <div>
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Avatar
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-gray-700"
          />
          {formData.avatar && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: {formData.avatar.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-3 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

