"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "../../Firebase.Config/firebase.config";
import { useDispatch } from "react-redux";

export default function IsUserLoggedIn() {
  const disPatch = useDispatch();

  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        disPatch(userData(currentUser));
      }
    });

    return () => subScribe();
  }, []);
}
