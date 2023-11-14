import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthToken'
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {token, userId} = useAuth()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Lakukan permintaan API untuk mendapatkan data pengguna di sini
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
  }, [token, userId]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};