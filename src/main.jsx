import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Register from './Register/Register.jsx';
import Login from './Login/login.jsx';
import Inbox from './Inbox/Inbox.jsx';
import Users from './Users/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/register.jsx",
        element:<Register></Register>
      },
      {
        path:"/",
        element:<Login></Login>
      },
      {
        path:"/inbox.jsx",
        element:<Inbox></Inbox>
      },
      {
        path:"/users.jsx",
        element:<Users></Users>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
