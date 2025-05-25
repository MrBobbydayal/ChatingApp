import React, { useState } from 'react'

export default function Signup() {
 

  return (
     <div className="flex items-center justify-center min-h-screen px-4 py-6">
  <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
    <h1 className="text-3xl font-semibold text-center text-white mb-6">
      SignUp <span className="text-blue-400">ChatApp</span>
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
        <label className="block text-sm mb-1">Fullname</label>
        <input
          type="text"
          placeholder="Fullname"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm  mb-1">Mobile</label>
        <input
          type="tel"
          placeholder="*******1234"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Gender</label>
        <div className="flex items-center gap-6">
          <label className="flex items-center">
            <input type="radio" name="gender" className="mr-2 radio radio-warning" defaultChecked />
            Male
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" className="mr-2 radio radio-warning" />
            Female
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="**********"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
        >
          SignUp
        </button>
      </div>
    </form>
  </div>
</div>


  );
}

