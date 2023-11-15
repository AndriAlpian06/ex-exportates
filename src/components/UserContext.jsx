import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthToken'
import axios from "axios";
import { useParams } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {token: authToken, userId:authUserId} = useAuth()
  const [userData, setUserData] = useState(null);
  const {tokenFromUrl, userIdFromUrl} = useParams()

  useEffect(() => {

    //console.log(userIdFromUrl)

    const token = authToken || tokenFromUrl;
    const userId = authUserId || userIdFromUrl;

    // if(!token && !userId){
    //   //console.error('Token or userId is missing.');
    //   return;
    // }

    const fetchUserData = async () => {
      try {

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        };

        const response = await axios.get(`https://api-exportates.vercel.app/users/${userId}`, config);
        //const response = await axios.get(`http://localhost:4000/users/${userId}`, headers);

        //console.log(response.data)
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [authToken, authUserId]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};