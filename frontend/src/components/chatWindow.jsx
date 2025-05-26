import { useEffect } from 'react';
import useConversation from '../zustand/useConversation.js';
import ChatInput from './Chatinput.jsx';
import MessageBubble from './messageBubble.jsx';
import { NotSelectedChat } from './NotSelectedChat.jsx';


export default function ChatWindow() {

 const{messages,setMessages,selectedConversation,setSelectedConversation}=useConversation();
  
useEffect(() => {
  const getMessage = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/Bobby/chatApp/messages/${selectedConversation._id}`, {
        method: "GET",
        credentials: "include"
      });
      if (res.status === 200) {
        console.log("API response:-", res);
         const data = await res.json();
         console.log("data at getmessage",data)
         setMessages(data);
      } else if (res.status === 500) {
        alert('Internal Server Error');
      }
    } catch (err) {
      console.log("Error at fetching getMessage Api:-", err.message);
      console.error("Error:", err);
    }
  };

 if(selectedConversation?._id) getMessage();
}, [selectedConversation?._id,setMessages]);


 
 
    useEffect(()=>{
      console.log("conversation on chat window",selectedConversation);

      return()=>setSelectedConversation(null)
    },[setSelectedConversation])
  return (
    <div className="flex flex-col flex-1 bg-black bg-opacity-30 backdrop-blur-md p-4">
      {!selectedConversation?(<NotSelectedChat/>):(<>
       <div className="text-white text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
        To: <span className="font-bold">{selectedConversation.fullName}</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        <MessageBubble/>
        {/* {messages.map((msg) => (
          <MessageBubble key={msg._id}  text={msg.message} time={msg.time} />
        ))} */}
      </div>
      <ChatInput />
      </>)}
      {/* <div className="text-white text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
        To: <span className="font-bold">Sam Edwards</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} from={msg.from} text={msg.text} time={msg.time} />
        ))}
      </div>
      <ChatInput /> */}
    </div>
  );
}