import React from 'react'

export const Sidebaar = () => {
  return (
    <div>
      <searchInput/>
      <div className='divider px-3'></div>
      
    </div>
  )
}


//////////
import React from 'react'

export const searchInput = () => {
  return (
<form className='flex items-center gap-2'>
<input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
<button type='submit' className='btn btn-circle bg-sky-500text-white'>
Icon
</button>
</form>
  )
}
///////
import React from 'react'
import { Sidebaar } from '../components/Sidebar'

export const Home = () => {
  return (
    <div className="flex sm:h-[450px]  md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
   <Sidebaar/>
   {/*<MessageContainer/>  */}
  </div>
  
  )
}














import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//////
import Sidebar from '../components/Sidebar.jsx';
import ChatWindow from '../components/chatWindow.jsx'
import Navbar from '../components/Navbar.jsx';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
        <div className="h-16">
        <Navbar />
      </div>
      <div className="flex-1 overflow-hidden flex bg-cover bg-center" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}