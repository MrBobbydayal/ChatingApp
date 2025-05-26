
import { useState,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import useConversation from '../zustand/useConversation.js';




export default function Sidebar() {
 const [selectedChatuserId, setSelectedChatuserId] = useState(null);
  const { setSelectedConversation,setChatusers } = useConversation();
  
      
  const [Localchatusers,setLocalchatusers]=useState([]);

  
      useEffect(() => {
       const fetchProfile = async () => {
         try {
           const res = await fetch("http://localhost:8000/api/v1/Bobby/chatApp/chatUser", {
             method: "GET",
             credentials: "include"
           });
     
           const response = await res.json();
           console.log("API response:", response);
     
           setChatusers(response);
            setLocalchatusers(response);
          
           
         } catch (err) {
           console.error("Fetch error:", err);
         }
       };
     
       fetchProfile();
     }, []);


     useEffect(() => {
    console.log("chatuser:", Localchatusers); // This will log the updated state
  }, [Localchatusers]); // This effect runs whenever 'chatusers' changes


 const handleSelectChatuser = (user) => {
    setSelectedChatuserId(user._id); // Set the ID of the selected user in local state
    setSelectedConversation(user); // Update the global conversation state via zustand
    console.log("Selected chat user:", user.username); // Log the selected user
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-black bg-opacity-30 backdrop-blur-md p-4">
      <div className="relative mb-4">
        <input type="text" placeholder="Search..." className="input w-full pr-10 rounded-full bg-gray-700 text-white" />
        <FaSearch className="absolute top-3 right-4 text-white" />
      </div>
      <ul className="space-y-2">
  {Array.isArray(Localchatusers) && Localchatusers.map((chatuser) => (

    <li
      key={chatuser._id}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer  hover:bg-blue-600   ${selectedChatuserId === chatuser._id ? 'bg-blue-600' : 'bg-gray-800'}`}
       onClick={() => handleSelectChatuser(chatuser)}
    >

       <div className="flex items-center gap-2">
        <img src={chatuser.avatar} alt={chatuser.fullName} className='rounded-full h-10'/>
        <div className="text-sm">
          <div className="font-bold text-white">{chatuser.username}</div>
          <div className="text-xs text-slate-500">{chatuser.fullName}</div>
        </div>
      </div>
      {/* <div className="relative w-10 h-10">
        <img src={chatuser.avatar} alt={chatuser.fullName} className="h-10 rounded-full" />
      </div>
      <span className="text-white font-medium">{chatuser.username}</span> */}
     
    </li>
   ))} 
</ul>

    </div>
  );
}
