import React, { useEffect, useState } from 'react';
import logo from '../logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [userInformation, setUserInformation] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userDetails = useSelector((store)=> store.user.userInfo);

  useEffect(() => {
    if (userDetails.length !== 0) {
      setUserInformation(userDetails);
    }
  }, [userDetails]);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { displayName, photoURL, email, uid } = user;
        dispatch(addUser({ displayName, photoURL, email, uid }));
        navigate("/browse")
        
      } else {
        // User is signed out
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }


  if(userInformation === []){
    return (
      <div className="h-32 z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full">
        <img src={logo} className="w-48 mt-6" alt="logo" />
      </div>
    );
  }
  if(userInformation.length !== 0){
    const {displayName, photoURL} = userInformation[0];
    console.log(displayName, photoURL);
    return (
      <div className="h-24 z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full flex justify-between">
        <img src={logo} className="w-48 h-full mt-6" alt="logo" />
        <div className='flex items-center'>
        <img src={photoURL} alt="User Profile" className="w-12 mt-6 m-4"/>
        <p className='m-4'>{displayName}</p>
        <p className='m-4 cursor-pointer' onClick={handleSignOut}>Sign Out</p>
        </div>
      </div>
    );
  }
};

export default Header;
