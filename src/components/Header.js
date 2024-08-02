import React, { useEffect, useRef, useState } from "react";
import logo from "../logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeAiSearchButton } from "../utils/aiSearchSlice";
import { langOptions } from "../utils/constants";
import { changeLanguage } from "../utils/langConfigSlice";
import SearchPage from "./SearchPage";
import { options, searchUrl, searchUrlext } from "../utils/constants";
import { addCachedresults } from "../utils/resultsSlice";

const Header = () => {
  const [userInformation, setUserInformation] = useState([]);
  const [focus, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user.userInfo);
  const searchBtn = useSelector((store) => store.aiSearch.aiSearchButton);
  const cachedResults = useSelector((store) => store.results.cachedResults);

  useEffect(() => {
    if (userDetails.length !== 0) {
      setUserInformation(userDetails);
    }
  }, [userDetails]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, email, uid } = user;
        dispatch(addUser({ displayName, photoURL, email, uid }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (searchInput === "") return;
    if (searchInput === cachedResults[searchInput]) {
      setSearchResults(cachedResults[searchInput]);
    }
    const timer = setTimeout(() => searchApi(), 400);
    return () => clearTimeout(timer);
  }, [searchInput, focus]);

  const searchApi = async () => {
    const data = await fetch(
      `${searchUrl}${searchInput}${searchUrlext}`,
      options
    );
    const json = await data.json();
    setSearchResults(json.results);
    dispatch(addCachedresults({ searchInput, results: json.results }));
  };

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

  const handleLogoClick = () => {
    if(searchBtn === true)
    dispatch(changeAiSearchButton(false));
    navigate("/");
  }
  const handleAiSuggestions = () => {
    searchBtn === false
      ? dispatch(changeAiSearchButton(true))
      : dispatch(changeAiSearchButton(false));
    navigate("/");
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleFocus = () => {
    setFocus(true);
  };

  if (userInformation.length < 0) {
    return (
      <div className="w-[100vw] h-32 z-40 bg-gradient-to-b from-black to-transparent fixed top-0">
        <img src={logo} className="w-48 mt-6" alt="logo" />
      </div>
    );
  }
  if (userInformation.length !== 0) {
    const { displayName, photoURL } = userInformation[0];
    return (
      <div className="lg:h-24 md:h-24 h-24 z-40 bg-gradient-to-b from-black to-transparent fixed top-0 w-[100vw] flex lg:justify-between md:justify-between flex-wrap overflow-visible">
        <img
          src={logo}
          className="lg:w-48 md:w-48 w-36 h-full lg:mt-6 md:mt-4 mt-2 cursor-pointer hidden md:block lg:block"
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className="flex items-center justify-center w-full lg:w-auto flex-wrap lg:flex-nowrap">
        <div className="lg:hidden md:hidden flex justify-center items-center w-full h-10 bg-black">
        <img
          src={logo}
          className="w-36 mt-28 mb-2 cursor-pointer"
          alt="logo"
          onClick={handleLogoClick}
        />
      </div>
        <div className="mr-4 flex-1 w-full lg:w-auto">
          <input
            placeholder="Search Movies"
            className="ml-2 mr-4 p-2 rounded bg-white bg-opacity-80 w-full"
            onFocus={handleFocus}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {searchBtn && (
          <select
            className="p-2 m-4 rounded-lg bg-red-600 text-black font-medium"
            onChange={handleLangChange}
          >
            {langOptions.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="bg-chatGPT p-2 rounded-lg font-medium"
          onClick={handleAiSuggestions}
        >
          {searchBtn ? "Home" : "Ai Search"}
        </button>
        {photoURL && (
          <img src={photoURL} alt="User Profile" className="w-10 mt-4 m-4 md:block lg:block hidden" />
        )}
        {displayName && (
          <p className="m-4 text-white font-thin md:block lg:block hidden">
            {displayName}
          </p>
        )}
        <p
          className="m-4 cursor-pointer text-white font-thin"
          onClick={handleSignOut}
        >
          Sign Out
        </p>
      </div>

      {/* Logo for small screens */}
      

      <>
        {searchResults.length !== 0 && focus && (
          <SearchPage focus={() => setFocus(false)} results={searchResults} />
        )}
      </>
    </div>
    );
  }
};

export default Header;


// import React, { useEffect, useState } from "react";
// import logo from "../logo.png";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";
// import { changeAiSearchButton } from "../utils/aiSearchSlice";
// import { langOptions } from "../utils/constants";
// import { changeLanguage } from "../utils/langConfigSlice";
// import SearchPage from "./SearchPage";
// import { options, searchUrl, searchUrlext } from "../utils/constants";
// import { addCachedresults } from "../utils/resultsSlice";

// const Header = () => {
//   const [userInformation, setUserInformation] = useState([]);
//   const [focus, setFocus] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userDetails = useSelector((store) => store.user.userInfo);
//   const searchBtn = useSelector((store) => store.aiSearch.aiSearchButton);
//   const cachedResults = useSelector((store) => store.results.cachedResults);

//   useEffect(() => {
//     if (userDetails.length !== 0) {
//       setUserInformation(userDetails);
//     }
//   }, [userDetails]);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { displayName, photoURL, email, uid } = user;
//         dispatch(addUser({ displayName, photoURL, email, uid }));
//         navigate("/browse");
//       } else {
//         navigate("/");
//       }
//     });
//     return () => unsubscribe();
//   }, [dispatch, navigate]);

//   useEffect(() => {
//     if (searchInput === "") return;
//     if (cachedResults[searchInput]) {
//       setSearchResults(cachedResults[searchInput]);
//     }
//     const timer = setTimeout(() => searchApi(), 400);
//     return () => clearTimeout(timer);
//   }, [searchInput, focus, cachedResults]);

//   const searchApi = async () => {
//     const data = await fetch(
//       `${searchUrl}${searchInput}${searchUrlext}`,
//       options
//     );
//     const json = await data.json();
//     setSearchResults(json.results);
//     dispatch(addCachedresults({ searchInput, results: json.results }));
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         dispatch(removeUser());
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Sign-out error:", error);
//       });
//   };

//   const handleLogoClick = () => {
//     if (searchBtn) dispatch(changeAiSearchButton(false));
//     navigate("/");
//   };

//   const handleAiSuggestions = () => {
//     dispatch(changeAiSearchButton(!searchBtn));
//     navigate("/");
//   };

//   const handleLangChange = (e) => {
//     dispatch(changeLanguage(e.target.value));
//   };

//   const handleFocus = () => {
//     setFocus(true);
//   };

//   const { displayName, photoURL } = userInformation[0] || {};

//   return (
//     <div className="lg:h-24 md:h-24 h-36 z-40 bg-gradient-to-b from-black to-transparent fixed top-0 w-full flex lg:justify-between md:justify-between flex-wrap overflow-visible">
//       {/* Logo for large and medium screens */}
//       <div className="hidden lg:flex lg:items-center lg:ml-4">
//         <img
//           src={logo}
//           className="lg:w-48 md:w-48 w-36 h-full lg:mt-6 md:mt-4 mt-2 cursor-pointer"
//           alt="logo"
//           onClick={handleLogoClick}
//         />
//       </div>

//       {/* Search and other items */}
//       <div className="flex items-center justify-center w-full lg:w-auto flex-wrap lg:flex-nowrap">
//         <div className="mr-4 flex-1 w-full lg:w-auto">
//           <input
//             placeholder="Search Movies"
//             className="mr-4 p-2 rounded bg-white bg-opacity-80 w-full"
//             onFocus={handleFocus}
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//         </div>
//         {searchBtn && (
//           <select
//             className="p-2 m-4 rounded-lg bg-red-600 text-black font-medium"
//             onChange={handleLangChange}
//           >
//             {langOptions.map((lang) => (
//               <option key={lang.identifier} value={lang.identifier}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-chatGPT p-2 rounded-lg font-medium"
//           onClick={handleAiSuggestions}
//         >
//           {searchBtn ? "Home" : "Ai Search"}
//         </button>
//         {photoURL && (
//           <img src={photoURL} alt="User Profile" className="w-10 mt-4 m-4 md:block lg:block hidden" />
//         )}
//         {displayName && (
//           <p className="m-4 text-white font-thin md:block lg:block hidden">
//             {displayName}
//           </p>
//         )}
//         <p
//           className="m-4 cursor-pointer text-white font-thin"
//           onClick={handleSignOut}
//         >
//           Sign Out
//         </p>
//       </div>

//       {/* Logo for small screens */}
//       <div className="lg:hidden flex justify-center items-center w-full">
//         <img
//           src={logo}
//           className="w-36 mt-4 cursor-pointer"
//           alt="logo"
//           onClick={handleLogoClick}
//         />
//       </div>

//       <>
//         {searchResults.length !== 0 && focus && (
//           <SearchPage focus={() => setFocus(false)} results={searchResults} />
//         )}
//       </>
//     </div>
//   );
// };

// export default Header;
