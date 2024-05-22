import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import trash from "../images/trash.png";
import attachment from "../images/attachment.png"
import "../stylesheets/style.css"
import "../stylesheets/toastify.css"

const Inbox = () => {
    return (
      <div>
      <div className="menu flex space-x-4 bg-gray-100 p-4">
        <div className="menu-item"><a href="/inbox" className="text-blue-500">Inbox</a></div>
        <div className="menu-item"><a href="/users" className="text-blue-500">Users</a></div>
        <div className="menu-item"><a href="/" className="text-blue-500">Login</a></div>
      </div>
      <div id="chat-container" className="p-4">
        <div id="search-container" className="mb-4">
          <input type="text" placeholder="Search" className="p-2 border rounded w-full" />
        </div>
        <div id="conversation-list" className="mb-4">
          <div className="conversation active flex items-center p-2 border-b">
            <img src={user1} alt="Sumit" className="w-10 h-10 rounded-full mr-2" />
            <div className="title-text font-bold">Sumit Saha</div>
            <div className="created-date text-gray-500 ml-auto">Apr 16</div>
            <div className="conversation-message text-gray-700">This is a message</div>
          </div>
          <div className="conversation flex items-center p-2 border-b">
            <img src={user2} alt="Sumit" className="w-10 h-10 rounded-full mr-2" />
            <div className="title-text font-bold">Sumit Saha</div>
            <div className="created-date text-gray-500 ml-auto">Apr 16</div>
            <div className="conversation-message text-gray-700">This is a message</div>
          </div>
        </div>
        <div id="new-message-container" className="mb-4">
          <a href="#" className="text-2xl text-blue-500">+</a>
        </div>
        <div id="chat-title" className="flex items-center mb-4">
          <span className="text-xl font-bold">Sumit</span>
          <img src={trash} alt="Delete Conversation" className="w-6 h-6 ml-auto" />
        </div>
        <div id="chat-message-list" className="mb-4">
          <div className="message-row other-message flex items-start mb-2">
            <img src={user1} alt="Sumit" className="w-8 h-8 rounded-full mr-2" />
            <div className="message-content">
              <div className="message-text bg-gray-200 p-2 rounded">Ok then</div>
              <div className="message-time text-gray-500 text-sm">Apr 16</div>
            </div>
          </div>
          <div className="message-row you-message flex items-end justify-end mb-2">
            <div className="message-content">
              <div className="message-text bg-blue-500 text-white p-2 rounded">Lorem ipsum dolor sit amet</div>
              <div className="message-time text-gray-500 text-sm">Apr 16</div>
            </div>
          </div>
        </div>
        <div id="chat-form" className="flex items-center text-white border-t p-2">
          <img src={attachment} alt="Add Attachment" className="w-6 h-6 mr-2" />
          <input type="text" placeholder="Type a message" className="p-2 border rounded w-full text-white " />
        </div>
      </div>
      <div className="modal-wrapper fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20">
        <div className="modal bg-white p-4 rounded shadow-lg">
          <a href="#" className="modal-close text-red-500 text-3xl">+</a>
          <div className="modal-title mb-4">
            <h2 className="text-2xl font-bold">Create New Conversation</h2>
          </div>
          <div className="modal-body">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="p-2 border rounded w-full text-white" />
              <input type="text" placeholder="Username" className="p-2 border rounded w-full text-white" />
              <input type="button" value="Submit" className="p-2 bg-blue-500 text-white rounded w-full" />
            </form>
          </div>
        </div>
      </div>
    </div>
  
    );
};

export default Inbox;