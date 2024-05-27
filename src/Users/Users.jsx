
import { Link} from "react-router-dom";
import "../stylesheets/style.css";
import "../stylesheets/toastify.css"
// import { useState } from "react";
import user1 from "../images/user1.png"
import trash1 from "../images/trash.png"
const Users = () => {
    fetch('http://localhost:3000/user/')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    return (
        <div>
            <div className="menu">
                <div className="menu-item"><a >Inbox</a></div>
                <div className="menu-item"><a>Users</a></div>
                <div className="menu-item"><Link to={"/login.jsx"}><a >Login</a></Link></div> 
            </div>

            <div className="manageUser-container">
                <div id="title">
                    <h2>Manage Users</h2>
                </div>

                <div className="new-message-container new-user">
                    <a href="#" >+</a>
                </div>

                <div id="users-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody id="users-table">
                            <tr id="">
                                <td className="name">
                                    <img src={user1} />
                                    <span>User 1</span>
                                </td>
                                <td>email@email.com</td>
                                <td className="manage">
                                    <img src={trash1} alt="Delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;