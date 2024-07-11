import auth from "@/Firebase.Config/firebase.config";
import useSecureAxios from "@/components/Hooks/Apis/PublicApi/SecureApi/useSecureAxios";
import usePublicAxios from "@/components/Hooks/Apis/PublicApi/usePublicAxios";
import axios from "axios";


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const axiosPublic = usePublicAxios();
  const axiosSecureApi = useSecureAxios();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const loggedInUserEmail = currentUser.email;

        const res = await axios.get(`/api/users?email=${loggedInUserEmail}`);
        console.log(res.data);


        try {
          const res = await axiosPublic.post('/jwt',loggedInUserEmail, {withCredentials:true});

          // console.log(res.data);
          
        } catch (error) {
          
        }


        try {
          const res = await axiosSecureApi.get(
            `/users?email=${currentUser.email}`, {withCredentials:true}
          );

          if (!res) {
            setLoading(true);
          } else {
            setUser(res.data);
            setLoading(false);
          }
        } catch (error) {
          setErrors(error);
        }
      } else {
        setUser(null);
        setLoading(false);
        // axiosPublic.post("/jwt")
      }
    });

    return () => unSubscribe();
  }, []);

  // user registation
  const userRegistation = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout
  const logOutHandle = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authInfo = { userRegistation, user, logOutHandle, userLogIn, loading, errors };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export default AuthProvider;
