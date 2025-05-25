export default function MessageBubble({ from, text, time }) {
  const isMe = from === 'me';
  return (
    <div className={`chat ${isMe ? 'chat-end' : 'chat-start'}`}>
      <div className={`chat-bubble ${isMe ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}>{text}</div>
      <div className="text-xs text-gray-300 mt-1">{time}</div>
    </div>
  );
}