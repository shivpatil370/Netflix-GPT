import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)

const toggleSignInForm=()=>{
  setIsSignInForm(!isSignInForm)
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='logo'/>
        </div>
        <form className='text-white w-3/12 h-fit absolute bg-black rounded-lg p-12 my-auto top-0 bottom-0 mx-auto right-0 left-0 bg-opacity-70'>
            <h1 className='text-2xl font-bold py-4 px-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm&&<input type="text" placeholder='User Name' className='p-2 m-2 w-full bg-gray-600' />}
            <input type="text" placeholder='Email Address' className='p-2 m-2 w-full bg-gray-600' />
            <input type="password" placeholder='Password' className='p-2 m-2 w-full bg-gray-600' />
            <button className='p-4 mx-2 my-4 bg-red-700 w-full active:bg-red-500 rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p onClick={()=>toggleSignInForm()} className='underline hover:cursor-pointer active:text-yellow-400'>{isSignInForm?"New to netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login