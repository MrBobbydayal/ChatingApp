import React, { useState } from 'react';
import { NavLink ,Navigate,useNavigate} from 'react-router-dom';
import useConversation from '../zustand/useConversation.js';

export default function Login() {

  const{user,setUser}=useConversation();
      const[input,setInput]=useState({
               username:'',
               email:'',
               password:'',
                     });
const navigate=useNavigate();
       const handlesubmit=async(e)=>{
                         e.preventDefault();
                         console.log(input);

                         
    try {
      const res = await fetch("http://localhost:8000/api/v1/Bobby/chatApp/users/login", {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input)
      });
      if(res.status==200){
        console.log("response at login",res);
        const data= await res.json();
        setUser(data.data.user);
        console.log("data at login as response",data)
        console.log("user data logined",data.data.user)
        navigate('/home')
      }
      else if(res.status==404){
        alert('User Does Not Exist')
      }else if(res.status==401){
        alert('Invalid User Credential')
      }else if(res.status==400){
        alert('Email or Username Required')
      }
    } catch (err) {
      console.error("Error:", err);
    }

                            };
  
  return (
   <div className="flex items-center justify-center min-h-screen px-4 py-6">
  <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
    <h1 className="text-3xl font-semibold text-center text-white mb-6">
      Login <span className="text-blue-400">ChatApp</span>
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
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input.email}
          onChange={(e)=>{setInput({...input, email: e.target.value})}}
        />
      </div>
      <div>
        <label className="block text-sm  mb-1">Password</label>
        <input
          type="password"
          placeholder="**********"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
           value={input.password}
          onChange={(e)=>{setInput({...input, password: e.target.value})}}
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

