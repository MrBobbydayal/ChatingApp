
import { useState,useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link ,NavLink ,useNavigate} from 'react-router-dom';


export default function Navbar() {
      
  const [input,setInput]=useState([]);
    const navigate=useNavigate();

       useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/Bobby/chatApp/users/userProfile", {
        method: "GET",
        credentials: "include"
      });

      const response = await res.json();
      console.log("API response:", response);

      if (response.data && response.data.length > 0) {
        setInput(response.data[0]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  fetchProfile();
}, []);


const handleLogout = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/Bobby/chatApp/users/logout", {
      method: "POST", // or "GET", depending on your backend
      credentials: "include" // important for sending cookies
    });

    if (res.status === 200) {
      alert("Logout successful!");
       navigate('/');
    } else {
      const data = await res.json();
      alert("Logout failed: " + data.message || res.statusText);
    }
  } catch (error) {
    console.error("Logout error:", error);
    alert("Something went wrong while logging out.");
  }
};





  return (
    <div className="bg-base-200 px-4 shadow-lg backdrop-blur-md bg-opacity-70 h-16 flex items-center justify-between md:justify-around">
      <div className="flex items-center gap-2">
        <img src={input.avatar}  className='rounded-full h-10'/>
        <div className="text-sm">
          <div className="font-bold text-gray-800">{input.username}</div>
          <div className="text-xs text-gray-500">{input.fullName}</div>
        </div>
      </div>

      

      <div className="flex justify-end md:justify-center">
        <button className="btn btn-sm btn-error text-white" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}






















