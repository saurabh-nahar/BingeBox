import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeAiSearchButton } from "../utils/aiSearchSlice";

const Header = () => {
  const [userInformation, setUserInformation] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user.userInfo);
  const searchBtn = useSelector((store) => store.aiSearch.aiSearchButton);

  useEffect(() => {
    if (userDetails.length !== 0) {
      setUserInformation(userDetails);
    }
  }, [userDetails]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { displayName, photoURL, email, uid } = user;
        dispatch(addUser({ displayName, photoURL, email, uid }));
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleAiSuggestions = () => {
    if (searchBtn === false) {
      dispatch(changeAiSearchButton(true));
    }
    if (searchBtn === true) {
      dispatch(changeAiSearchButton(false));
      navigate("/");
    }
  };

  if (userInformation.length < 0) {
    return (
      <div className="w-[100vw] h-32 z-40 bg-gradient-to-b from-black to-transparent absolute top-0">
        <img src={logo} className="w-48 mt-6" alt="logo" />
      </div>
    );
  }
  if (userInformation.length !== 0) {
    const { displayName, photoURL } = userInformation[0];
    return (
      <div className="h-24 z-40 bg-gradient-to-b from-black to-transparent absolute top-0 w-[100vw] flex justify-between">
        <img src={logo} className="w-48 h-full mt-6" alt="logo" />
        <div className="flex items-center">
          <button
            className="bg-chatGPT p-2 rounded-lg"
            onClick={handleAiSuggestions}
          >
            {searchBtn === true ? "Home" : "Ai Search"}
          </button>
          <img src={photoURL} alt="User Profile" className="w-10 mt-4 m-4" />
          <p className="m-4 text-white font-thin">{displayName}</p>
          <p
            className="m-4 cursor-pointer text-white font-thin"
            onClick={handleSignOut}
          >
            Sign Out
          </p>
        </div>
      </div>
    );
  }
};

export default Header;
