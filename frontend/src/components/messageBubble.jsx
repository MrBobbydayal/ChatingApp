import useConversation from '../zustand/useConversation.js';
;

const Message = () => {
  const { selectedConversation, messages,user } = useConversation();
   console.log("user in message bubble:-",user);
   console.log("selectedConversation in message bubble:-",selectedConversation);
   console.log("messages in message bubble:-",messages);


  return (
    <>
      {messages.map((msg) => {
        const fromMe = msg.senderId === user._id;
        const chatClassName = fromMe ? 'chat-end' : 'chat-start';
        const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
        const avatar = fromMe ? user.avatar : msg.avatar;

        return (
          <div key={msg._id } className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS chat bubble component'
                  src={avatar}
                />
              </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{msg.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{msg.time}</div> {/* Assuming 'time' is in your message object */}
          </div>
        );
      })}
    </>
  );
};

export default Message;














// // import useConversation from '../zustand/useConversation.js';
// // import verifyJWT from '/ChattingApp/src/middleware/auth.middleware.js'



// // export default function MessageBubble({ message, text, time }) {
// //   const {authUser}=verifyJWT();
// //   const {selectedConversation}=useConversation();
// //   const fromMe=message.senderId===authUser._id;
// //   return (
// //     <div className={`chat ${isMe ? 'chat-end' : 'chat-start'}`}>
// //       <div className={`chat-bubble ${isMe ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}>{text}</div>
// //       <div className="text-xs text-gray-300 mt-1">{time}</div>
// //     </div>
// //   );
// // }










// import useConversation from '../zustand/useConversation.js';
// const Message = ({}) => {


// const {selectedConversation,user,messages}= useConversation();

// const fromMe =messages.senderId === user._id;

// const chatClassName = fromMe ? 'chat-end': 'chat-start';

// const profilePic = fromMe? user.avatar: selectedConversation?.avatar;

// const bubbleBgColor =fromMe? 'bg-blue-500':"";

// return (
//  {messages.map((msg) => (
         
//     <div className={`chat ${chatClassName}`}>

// <div className='chat-image avatar'>

// <div className='w-10 rounded-full'>

// <img alt='Tailwind CSS chat bubble component'
// src={profilePic}/>
// </div>
// </div>
// <div className={`chat-bubble text-white bg-blue-500  ${bubbleBgColor}`}>{messages.message}</div>
// <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
// </div>
//         ))}

// );
//  };
// export default Message