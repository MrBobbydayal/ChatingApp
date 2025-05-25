




import { FaUserCircle } from 'react-icons/fa';
import { Link ,NavLink} from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="bg-base-200 px-4 shadow-lg backdrop-blur-md bg-opacity-70 h-16 flex items-center justify-between md:justify-around">
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-3xl text-blue-600" />
        <div className="text-sm">
          <div className="font-bold text-gray-800">John Doe</div>
          <div className="text-xs text-gray-500">Online</div>
        </div>
      </div>

      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
         <li><NavLink to="/">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </div>

      <div className="flex justify-end md:justify-center">
        <button className="btn btn-sm btn-error text-white">Logout</button>
      </div>
    </div>
  );
}






















