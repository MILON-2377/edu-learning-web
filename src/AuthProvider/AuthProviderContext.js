import auth from "@/Firebase.Config/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
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

  // user logout
  const logOutHandle = () => {
    return signOut(auth);
  }

  const authInfo = { userRegistation, user, logOutHandle };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};
export default AuthProvider;
