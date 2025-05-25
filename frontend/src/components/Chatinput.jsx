import { IoSend } from 'react-icons/io5';

export default function ChatInput() {
  return (
    <div className="mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Send a message"
          className="input w-full rounded-full pl-4 pr-10 bg-gray-700 text-white"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
}