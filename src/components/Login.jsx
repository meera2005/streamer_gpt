import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_large.jpg"/>
    <form className='absolute p-12 bg-black/80 w-3/12 my-72 mx-150'>
      <h1 className='text-white font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
      {isSignInForm && 
      <input type="text" placeholder='Full Name' className="p-2 my-2 bg-gray-200 text-black placeholder:text-gray-600 w-full"/>
      }
      <input type="text" placeholder='Email address' className="p-2 my-2 bg-gray-200 text-black placeholder:text-gray-600 w-full"/>
      <input type="password" placeholder='Password' className='p-2 my-2 bg-gray-200 text-black placeholder:text-gray-600 w-full'/>
      <button className='p-4 my-4 bg-red-700 text-white w-full'>{isSignInForm? "Sign In":"Sign Up"}</button>
      <h1 className='text-white' onClick={toggleSignInForm}>{isSignInForm? "No account? Sign up": "Already an user? Sign In"}</h1>
    </form>

    </div>
  
  )
}

export default Login