import { IoSend } from 'react-icons/io5';
import useConversation from '../zustand/useConversation.js';
import { useState } from 'react';

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const { messages, setMessages, selectedConversation } = useConversation();

  const handleSendMessage = async (text) => {
    if (!selectedConversation?._id) {
      console.log("No selected conversation to send message to.");
      return;
    }
    try {
      const res = await fetch(`http://localhost:8000/api/v1/Bobby/chatApp/messages/send/${selectedConversation._id}`, {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }), // Changed 'text' to 'message'
      });
      if (res.status === 201) {
        const data = await res.json();
        setMessages([...messages, data]);
        console.log("message Sent Succesfully",data);
      } else if (res.status === 500) {
        alert('Internal Server Error');
      } else {
        const errorData = await res.json();
        console.error("Failed to send message:", errorData);
      }
    } catch (err) {
      console.log("Error at fetching SendMessage Api:-", err.message);
      console.error("Error:", err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await handleSendMessage(message.trim());
    setMessage("");
  };

  return (
    <div className="mt-4">
  <form onSubmit={sendMessage} className="relative">
    <input
      type="text"
      placeholder="Send a message"
      className="input w-full rounded-full pl-4 pr-[3rem] bg-gray-700 text-white"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button
      type="submit"
      className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-10"
    >
      <IoSend size={20} />
    </button>
  </form>
</div>
  );
}















//previous 

// import { IoSend } from 'react-icons/io5';
// import useConversation from '../zustand/useConversation.js';
// import { useState } from 'react';

// export default function ChatInput() {
//   const[message,setMessage]=useState()
//  const {messages ,setMessages,selectedConversation}=useConversation();

//   const handleSendMessage=async(message)=>{
//   console.log(message);

//     try {
//       const res = await fetch(`http://localhost:8000/api/v1/Bobby/chatApp/messages/send/${selectedConversation._id}`, {
//         method: "POST",
//         credentials:'include',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(message)
//       });
//       if(res.status==201){
//         const data= await res.json();

//         setMessages([...messages,data])
//       }
//       else if(res.status==500){
//         alert('Internal Server Error')
//       }
//     } catch (err) {
//       console.log("Error at fetching SendMessage Api:-",err.message)
//       console.error("Error:", err);
//     }



// }

// const sendMessage=async(e)=>{
//   e.preventDefault();
//   console.log(message);
//   if(!message)return;
//    await handleSendMessage(message);
//    setMessage("");
// }

    

//   return (
//     <div className="mt-4">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Send a message"
//           className="input w-full rounded-full pl-4 pr-10 bg-gray-700 text-white"
//           value={message}
//           onChange={(e)=>setMessage(e.target.value)}
//         />
//         <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
//         onClick={handleSendMessage}>
//           <IoSend size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }







//  <div className="mt-4">
//   <form onSubmit={sendMessage} className="relative">
//    <input
//       type="text"
//       placeholder="Send a message"
//       className="input w-full rounded-full pl-4 pr-12 bg-gray-700 text-white"
//       value={message}
//       onChange={(e) => setMessage(e.target.value)}
//     />
//     <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
//       <IoSend size={20} />
//     </button> 
//   </form>
// </div>