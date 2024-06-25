import React, { useEffect } from 'react';
import logo from '../logo.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        navigate("/browse")
        
      } else {
        // User is signed out
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[])


  return (
    <div className="h-32 z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full">
      <img src={logo} className="w-48 mt-6" alt="logo" />
    </div>
  );
};

export default Header;
