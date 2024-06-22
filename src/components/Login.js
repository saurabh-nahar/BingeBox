import React, { useState } from 'react';
import Header from './Header';


const Login = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(!signUp);
  }
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
        {(!signUp) ? <h3 className="text-white text-3xl pl-12">Sign In</h3> : <h3 className="text-white text-3xl pl-12">Sign Up</h3>}
        <form className= "flex flex-col items-center">
          {(signUp) ? <input placeholder='Name' className='mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40'/> : null}
          <input placeholder='Email' className='mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40'/>
          <input placeholder='Password' className='mt-6 p-4 w-3/4 rounded-sm bg-gray-500 bg-opacity-40'/>
          { (!signUp) ? <button className='p-2 mt-6 w-3/4 bg-red-600 text-white rounded-sm'>Sign In</button> : <button className='p-2 mt-6 w-3/4 bg-red-600 text-white rounded-sm'>Sign Up</button>}
          {(!signUp) ? <p onClick={handleSignUp} className='text-gray-400 p-4 cursor-pointer'>New to BingeBox? Sign Up Now.</p> : <p onClick={handleSignUp} className='text-gray-400 p-4 cursor-pointer'>Already a User? Sign In.</p>}
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
