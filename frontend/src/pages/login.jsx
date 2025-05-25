import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  
  return (
   <div className="flex items-center justify-center min-h-screen px-4 py-6">
  <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
    <h1 className="text-3xl font-semibold text-center text-white mb-6">
      Login <span className="text-blue-400">ChatApp</span>
    </h1>

    <form className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="username"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm  mb-1">Password</label>
        <input
          type="password"
          placeholder="**********"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        Didn't have account?<NavLink to='/signup'  className="link link-warning">Click me</NavLink>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

