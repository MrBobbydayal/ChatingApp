import Sidebar from '../components/Sidebar.jsx';
import ChatWindow from '../components/chatWindow.jsx'
import Navbar from '../components/Navbar.jsx';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto flex flex-col md:flex-row bg-cover bg-center" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}