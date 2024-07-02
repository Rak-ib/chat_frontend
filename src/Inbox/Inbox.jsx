import user1 from '../images/user1.png';
// import user2 from '../images/user2.png';
// import trash from "../images/trash.png";
// import attachment from "../images/attachment.png"
import "../stylesheets/style.css"
import "../stylesheets/toastify.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Conversation from '../Conversation/Conversation';

const Inbox = () => {
  const [conversation, setConversation] = useState([]);
  const [logedinUser, setLogedinUser] = useState(null);
  const [name, setName] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null); // New state for selected conversation ID
  const [id,setId]=useState(null)

  const conversationList = async () => {
    try {
      axios.get('http://localhost:3000/inbox/', { withCredentials: true })
        .then(res => {
          console.log(res.data);
          setConversation(res.data);
          axios.get('http://localhost:3000/', { withCredentials: true })
            .then(res => {
              console.log(res.data);
              setLogedinUser(res.data.userid);
              setName(res.data.username);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    conversationList();
  }, []);

  const addConversation = async (participant) => {
    console.log("finally come here");
    axios.post('http://localhost:3000/inbox/conversation', participant, { withCredentials: true })
      .then(res => {
        console.log("finally");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    axios.get('http://localhost:3000/inbox/search', { params: { name }, withCredentials: true })
      .then(res => {
        console.log(res.data);
        addConversation(res.data);
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  const handleConversationClick = (conv) => {
    setSelectedConversation(conv);
    setId(conv._id)
    console.log("Selected Conversation", conv);
  };

  return (
    <div>
      <div className="menu">
        <div className="menu-item"><a href="/inbox">Inbox</a></div>
        <div className="menu-item"><a href="/users">Users</a></div>
        <div className="menu-item"><a href="/">{logedinUser ? name : "Login"}</a></div>
      </div>
      <div id="chat-container">
        <div>
          <div id="search-container">
            <input type="text" placeholder="Search" />
          </div>
          {/* conversation list here */}
          <div id="conversation-list">
            {conversation.map(conv => (
              <div key={conv._id} className="conversation" onClick={() => handleConversationClick(conv)}>
                <img src={user1} alt="User" />
                <div className="title-text">{conv.participant.id === logedinUser ? conv.creator.name : conv.participant.name}</div>
                <div className="created-date">{new Date(conv.last_updated).toDateString()}</div>
                <div className="conversation-message">{conv.last_message}</div>
              </div>
            ))}
          </div>
          <div>
          </div>
          <a className="text-5xl text-white hover:cursor-default" onClick={() => document.getElementById('my_modal_1').showModal()}>+</a>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <a href="#" className="modal-close text-7xl text-white "></a>
            <div className="modal-title">
              <h2>Create New Conversation</h2>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSearch}>
                <input type="text" placeholder="Name" name='name' />
                <button className='btn btn-primary'>Submit</button>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {console.log("dd",selectedConversation)}
        <Conversation selectedConversation={selectedConversation} id={id} logedinUser={logedinUser} userName={name} />
      </div>
    </div>
  );
};

export default Inbox;
