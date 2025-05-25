import { FaSearch } from 'react-icons/fa';

const users = [
  { name: 'Sam Edwards', img: '/avatars/sam.png', active: true },
  { name: 'Rebecca Barker', img: '/avatars/rebecca.png' },
  { name: 'Alyssa Davis', img: '/avatars/alyssa.png' },
  { name: 'Jack John', img: '/avatars/jack.png' },
  { name: 'Felix Forbes', img: '/avatars/felix.png' },
];

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-black bg-opacity-30 backdrop-blur-md p-4">
      <div className="relative mb-4">
        <input type="text" placeholder="Search..." className="input w-full pr-10 rounded-full bg-gray-700 text-white" />
        <FaSearch className="absolute top-3 right-4 text-white" />
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-600 ${user.active ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full" />
            <span className="text-white font-medium">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
