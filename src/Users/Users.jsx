
// import { Link} from "react-router-dom";
// import "../stylesheets/style.css";
// import "../stylesheets/toastify.css"
// // import { useState } from "react";
// // import user1 from "../images/user1.png"
// import trash1 from "../images/trash.png"
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     // const [error, setError] = useState('');
//     useEffect(()=>{
//         axios.get('http://localhost:3000/user')
//         .then(response => {
//             setUsers(response.data);
//             console.log(response.data);
//             // console.log(import.meta.env.VITE_apiKey);
//             // console.log(users);
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//             // setError('Could not fetch users. Please try again later.');
//         });    
   
//     },[]);
//     // useEffect(() => {
//     //     console.log(users);  // Log users state whenever it changes
//     // }, [users]);

//     // if (users.length === 0) {
//     //     return <span className="loading loading-bars loading-lg"></span>;
//     // }
  
//     return (
//         <div>
//         <div className="menu">
//             <div className="menu-item"><a href="#">Inbox</a></div>
//             <div className="menu-item"><a href="#">Users</a></div>
//             <div className="menu-item"><Link to="/login"><a href="#">Login</a></Link></div>
//         </div>

//         <div className="manageUser-container">
//             <div id="title">
//                 <h2>Manage Users</h2>
//             </div>

//             <div className="new-message-container new-user">
//                 <a href="#">+</a>
//             </div>

//             <div id="users-table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Manage</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td className="name">
//                                     {/* <img src={user1} alt="User" /> */}
//                                     <img src={`http://localhost:3000/uploads/${user.avatar}`}    />
//                                     <span>{user.name}</span>
//                                 </td>
//                                 <td>{user.email}{import.meta.env.SECRETE}</td>
//                                 <td className="manage">
//                                     <img src={trash1} alt="Delete" />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Users;





import { Link } from "react-router-dom";
import "../stylesheets/style.css";
import "../stylesheets/toastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import trash1 from "../images/trash.png";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user',{withCredentials:true})
            .then(response => {
                // Ensure response data is an array
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    if (!Array.isArray(users)) {
        return <span className="loading loading-bars loading-lg">Loading...</span>;
    }
    
    return (
        <div>
            <div className="menu">
                <div className="menu-item"><a href="#">Inbox</a></div>
                <div className="menu-item"><a href="#">Users</a></div>
                <div className="menu-item"><Link to="/">Login</Link></div>
            </div>

            <div className="manageUser-container">
                <div id="title">
                    <h2>Manage Users</h2>
                </div>

                <div className="new-message-container new-user">
                    <a href="#">+</a>
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
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="name">
                                        <img src={`http://localhost:3000/uploads/${user.avatar}`} alt="User Avatar" />
                                        <span>{user.name}</span>
                                    </td>
                                    <td>{user.email}</td>
                                    <td className="manage">
                                        <img src={trash1} alt="Delete" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
