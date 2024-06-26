import React, { useRef, useState } from "react";
import { handleValidation } from "../utils/handleValidation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { profileUrl } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    const errorInValidation = handleValidation(
      email.current.value,
      password.current.value
    );
    setError(errorInValidation);

    if (error === null)
      if (signUp) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: profileUrl,
            })
              .then(() => {
                const { displayName, photoURL, email, uid } = auth.currentUser;
                dispatch(addUser({ displayName, photoURL, email, uid }));
              })
              .catch((error) => {
                // An error occurred
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(`${errorCode}: ${errorMessage}`);
          });
      }
    if (!signUp) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          const { displayName, photoURL, email, uid } = auth.currentUser;
          dispatch(addUser({ displayName, photoURL, email, uid }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}: ${errorMessage}`);
        });
    }
    e.preventDefault();
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };
  return (
    <div className="relative h-screen w-full bg-black">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/ed3169bc-bae8-4c49-80ed-bab82d071166/CA-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Background"
      />
      <Header />
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className=" bg-black bg-opacity-80 p-8 rounded w-1/4">
          {!signUp ? (
            <h3 className="text-white text-3xl pl-12">Sign In</h3>
          ) : (
            <h3 className="text-white text-3xl pl-12">Sign Up</h3>
          )}
          <form className="flex flex-col items-center" onSubmit={handleLogin}>
            {signUp ? (
              <input
                ref={name}
                placeholder="Name"
                className="mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40"
                type={"text"}
                name="name"
              />
            ) : null}
            <input
              ref={email}
              placeholder="Email"
              className="mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40"
              type={"text"}
              name="email"
            />
            <input
              ref={password}
              placeholder="Password"
              className="mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40"
              type={"password"}
              name="password"
            />
            {!signUp ? (
              <button
                className="p-2 mt-6 w-3/4 bg-red-600 text-white rounded-sm"
                type="submit"
              >
                Sign In
              </button>
            ) : (
              <button
                className="p-2 mt-6 w-3/4 bg-red-600 text-white rounded-sm"
                type="submit"
              >
                Sign Up
              </button>
            )}
            {error === null ? null : (
              <p className="text-red-600 pt-6">{error}</p>
            )}
            {!signUp ? (
              <p
                onClick={handleSignUp}
                className="text-gray-400 p-4 cursor-pointer"
              >
                New to BingeBox? Sign Up Now.
              </p>
            ) : (
              <p
                onClick={handleSignUp}
                className="text-gray-400 p-4 cursor-pointer"
              >
                Already a User? Sign In.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
