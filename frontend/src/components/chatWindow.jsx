import ChatInput from './Chatinput.jsx';
import MessageBubble from './messageBubble.jsx';

const messages = [
  { from: 'other', text: 'hi Zoe!', time: '20:50' },
  { from: 'me', text: 'hi Sam!', time: '20:46' },
  { from: 'me', text: "how's it going?", time: '20:51' },
  { from: 'me', text: 'long time no see!', time: '20:51' },
  { from: 'other', text: 'yes exactly!', time: '18:24' },
];

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 bg-black bg-opacity-30 backdrop-blur-md p-4">
      <div className="text-white text-lg font-semibold border-b border-gray-500 pb-2 mb-4">
        To: <span className="font-bold">Sam Edwards</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} from={msg.from} text={msg.text} time={msg.time} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}