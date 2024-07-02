import { useEffect, useState, useRef } from "react";
import trash from "../images/trash.png";
import user1 from '../images/user1.png';
import axios from "axios";

const Conversation = ({ selectedConversation, id, logedinUser, userName }) => {
  const [right, setRight] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const fetchMessages = async () => {
    if (selectedConversation) {
      try {
        const res = await axios.get(`http://localhost:3000/inbox/getmessages/${selectedConversation._id}`, { withCredentials: true });
        setMessages(res.data.messages);
        // scrollToBottom();
      } catch (err) {
        console.error("error:", err);
      }
    }
  };

  useEffect(() => {
    fetchMessages();

    if (selectedConversation) {
      setRight(selectedConversation.creator.id === logedinUser);
    }
  }, [selectedConversation, logedinUser]);

  const handleMessage = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const attachment = null;
    const receiverId = right ? selectedConversation.participant.id : selectedConversation.creator.id;
    const receiverName = right ? selectedConversation.participant.name : selectedConversation.creator.name;
    const conversation_id = id;
    const Message = { message, attachment, receiverId, receiverName, conversation_id };

    try {
      await axios.post('http://localhost:3000/inbox/sendmessages', Message, { withCredentials: true });
      e.target.reset();
      await fetchMessages(); // Re-fetch messages after sending a new one
      // scrollToBottom();
    } catch (err) {
      console.error(err);
    }
  };

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  if (!selectedConversation || messages.length === 0) {
    return <div>Select a conversation to view details.</div>;
  }

  return (
    <div>
      <div id="chat-title" className="flex items-center justify-between p-4 bg-gray-200">
        <span>{right ? selectedConversation.participant.name : selectedConversation.creator.name}</span>
        <img src={trash} alt="Delete Conversation" />
      </div>
      <div id="chat-message-list" className="flex-grow p-4 overflow-y-auto bg-gray-100 h-[620px]">
        {messages.map((msg) => (
          <div key={msg._id} className={`message-row ${msg.sender.name === userName ? 'you-message' : 'other-message'}`}>
            <div className="message-content">
              {msg.sender.name !== userName && <img src={user1} alt={msg.sender.name} />}
              <div className="message-text">{msg.text}</div>
              <div className="message-time">{new Date(msg.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div id="chat-form">
        <form onSubmit={handleMessage} className='flex flex-row align-bottom'>
          <input type="text" className='w-[60vw]' name="message" placeholder="Type a message" />
          <button className='btn btn-primary'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
