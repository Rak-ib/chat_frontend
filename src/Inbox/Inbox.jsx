import user1 from '../images/user1.png';
// import user2 from '../images/user2.png';
import trash from "../images/trash.png";
import attachment from "../images/attachment.png"
import "../stylesheets/style.css"
import "../stylesheets/toastify.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Inbox = () => {
  const [conversation,setConversation]=useState([])
  const conversationList=async()=>{
    try {
      axios.get('http://localhost:3000/inbox/',{withCredentials:true})
    .then(res=>{
      console.log(res.data);
      setConversation(res.data)
      axios.get('http://localhost:3000/',{withCredentials:true})
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    conversationList();
  },[])


   const addConversation=async(participant)=>{
    console.log("finally come here");
    axios.post('http://localhost:3000/inbox/conversation',participant,{withCredentials:true})
    .then(res=>{
      console.log("finally");
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
   }
  const handleSearch=async(e)=>{
    e.preventDefault();
    // console.log("ok");
    const name=e.target.name.value;
    console.log(name);
    // const User={name}
    axios.get('http://localhost:3000/inbox/search',{params:{name},withCredentials:true})
    .then(res=>{
      console.log(res.data);
      addConversation(res.data)
    })
    .catch(e=>{
      console.log(e.message);
    })
  }
  return (
    <div>
      <div className="menu">
        <div className="menu-item"><a href="/inbox">Inbox</a></div>
        <div className="menu-item"><a href="/users">Users</a></div>
        <div className="menu-item"><a href="/">Login</a></div>
      </div>
      <div id="chat-container">
        <div id="search-container">
          <input type="text" placeholder="Search" />
        </div>
        {/* conversation list here */}
        <div id="conversation-list">
        {conversation.map(conv => (
            <div key={conv._id} className="conversation">
              <img src={user1} alt="User" />
              <div className="title-text">{conv.participant.name}</div>
              <div className="created-date">{new Date(conv.last_updated).toDateString()}</div>
              <div className="conversation-message">{conv.last_message}</div>
            </div>
          ))}
        </div>
        {/* <div id="new-message-container">
        <a href="#" className='text-6xl text-white'>+</a>
      </div> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div>
        <a className="text-5xl text-white hover:cursor-default" onClick={() => document.getElementById('my_modal_1').showModal()}>+</a>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
          <a href="#" className="modal-close text-7xl text-white "> heoo</a>
          <div className="modal-title">
            <h2>Create New Conversation</h2>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Name" name='name' />
              {/* <input type="text" placeholder="Username" /> */}
              {/* <input type="button" className='btn btn-primary' value="Submit" /> */}
              <button className='btn btn-primary' >Submit</button>
            </form>
          </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        </div>
        <div id="chat-title">
          <span>Sumit</span>
          <img src={trash} alt="Delete Conversation" />
        </div>
        <div id="chat-message-list">
          <div className="message-row other-message">
            <div className="message-content">
              <img src={user1} alt="Sumit" />
              <div className="message-text">Ok then</div>
              <div className="message-time">Apr 16</div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <div className="message-text">Lorem ipsum dolor sit amet</div>
              <div className="message-time">Apr 16</div>
            </div>
          </div>
        </div>
        <div id="chat-form">
          <img src={attachment} alt="Add Attachment" />
          <input type="text" placeholder="Type a message" />
        </div>
      </div>

      
    </div>

  );
};

export default Inbox;