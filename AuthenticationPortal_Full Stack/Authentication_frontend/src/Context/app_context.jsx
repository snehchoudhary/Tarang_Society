import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const getAuthState = async ()=> {
    try {
      const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
      if(data.success){
        setIsLoggedin(true)
        getUserData()
      }
    }catch(error){
        toast.error(error.message)
    }
  }

  const getUserData = async () => {
    try{
        const {data} = await axios.get(backendUrl + '/api/user/data', { withCredentials: true })
        data.success ? setUserData(data.userData) : toast.error(data.message)
    }catch(error){
         toast.error(error.message)
        
    }
  }

  useEffect(() => {
    getAuthState();
  })

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
