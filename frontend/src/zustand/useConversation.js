
import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  user:[], //login data stored for user
  setUser:(user)=>set({user}),
  messages: [],
  setMessages: (messages) => set({ messages }),
  chatusers: [], // Add chatusers state
  setChatusers: (users) => set({ chatusers: users }), // Add setChatusers function
}));

export default useConversation;
























//previous one

// import {create} from 'zustand';




// const useConversation = create((set) => ({
//    selectedConversation: null,

//    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
//      messages: [], 
//      setMessages: (messages) => set({messages}),
    
//     }))


// export default useConversation;