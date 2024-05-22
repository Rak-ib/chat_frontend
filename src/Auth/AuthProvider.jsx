import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase.config"
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)



    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])


    const userInfo={
        user,
        loading
    }


    return <AuthContext.Provider value={userInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;