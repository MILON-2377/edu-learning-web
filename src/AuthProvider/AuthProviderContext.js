import auth from "@/Firebase.Config/firebase.config";
import useUserDataLoader from "@/components/DataLoaderApi/UserDataLoaderApi/useUserDataLoader";
import useSecureAxios from "@/components/Hooks/Apis/PublicApi/SecureApi/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
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
  const axiosSecureApi = useSecureAxios();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const res = await axiosSecureApi.get(
            `/users?email=${currentUser.email}`
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
    return signOut(auth);
  };

  const authInfo = { userRegistation, user, logOutHandle, userLogIn, loading };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export default AuthProvider;
