import React, { useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom';

export default function Signup() {
        const[input,setInput]=useState({
          username:'',
          fullName:'',
          email:'',
          number:'',
          gender:'',
          password:'',
});

const navigate=useNavigate();
const handlesubmit=async(e)=>{
  e.preventDefault();
  console.log(input);

    try {
      const res = await fetch("http://localhost:8000/api/v1/Bobby/chatApp/users/register", {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input)
      });
      if(res.status==201){
        navigate('/')
      }
      else if(res.status==500){
        alert('Something went wrong while registering the user')
      }else if(res.status==409){
        alert('User with email or username already exists')
      }else if(res.status==400){
        alert('All fields are Required')
      }
    } catch (err) {
      console.error("Error:", err);
    }



}

  return (
     <div className="flex items-center justify-center min-h-screen px-4 py-6">
  <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
    <h1 className="text-3xl font-semibold text-center text-white mb-6">
      SignUp <span className="text-blue-400">ChatApp</span>
    </h1>

    <form className="space-y-4" onSubmit={handlesubmit}>
      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="username"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input.username}
          onChange={(e)=>{setInput({...input, username: e.target.value})}}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Fullname</label>
        <input
          type="text"
          placeholder="Fullname"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input.fullName}
          onChange={(e)=>{setInput({...input, fullName: e.target.value})}}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input.email}
          onChange={(e)=>{setInput({...input, email: e.target.value})}}
        />
      </div>

      <div>
        <label className="block text-sm  mb-1">Mobile</label>
        <input
          type="tel"
          placeholder="*******1234"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input.number}
          onChange={(e)=>{setInput({...input, number: e.target.value})}}
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Gender</label>
        <div className="flex items-center gap-6">
          <label className="flex items-center">
            <input type="radio" name="gender" value="male" className="mr-2 radio radio-warning"
           checked={input.gender === 'male'}
           onChange={(e) =>
          setInput((prev) => ({ ...prev, gender: e.target.value }))
        }
             />
            Male
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" value="female" className="mr-2 radio radio-warning" 
            checked={input.gender === 'female'}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, gender: e.target.value }))
        }
           />
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
          value={input.password}
          onChange={(e)=>{setInput({...input, password: e.target.value})}}
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

