import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateDeta } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const [check,setCheck]=useState(false)
  // console.log(isSignInForm)
  // console.log(!isSignInForm&&check)
  const name=useRef(null);
  const email=useRef(null)
  const password=useRef(null)

  const handleButtonClick=()=>{
       const message=checkValidateDeta(email.current.value, password.current.value, name?.current?.value);
       setErrorMessage(message)
      //  console.log(message);
      if(message) return;
// \------------------------------------------------------------------------------------
         if(!isSignInForm){
              // create new user
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed UP logic
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name?.current?.value, photoURL: "https://avatars.githubusercontent.com/u/109900134?s=400&u=01cc8e8ad6e8a81ece6eab90dca82a975cb9c7a3&v=4"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
              // ...
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
      navigate("/browse");
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
      // ...
    });
    // console.log(user)
    setCheck(true)
    setErrorMessage("Sign Up successfully! 😃");
    alert("Sign Up successfully! 😃");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    setCheck(false);
    setIsSignInForm(true)
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });

         }
         else{
            //  sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
         console.log(errorCode+ "-"  + errorMessage);
      setErrorMessage("user not found!, please sign-Up your account");
      navigate("/")
  });
         }
  }

const toggleSignInForm=()=>{
  setIsSignInForm(!isSignInForm)
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='text-white w-3/12 h-fit absolute bg-black rounded-lg p-12 my-auto top-0 bottom-0 mx-auto right-0 left-0 bg-opacity-70'>
            <h1 className='text-2xl font-bold py-4 px-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm&&<input ref={name} type="text" placeholder='User Name' className='p-2 m-2 w-full bg-gray-600' />}
            <input ref={email} type="text" placeholder='Email Address' className='p-2 m-2 w-full bg-gray-600' />
            <input ref={password} type="password" placeholder='Password' className='p-2 m-2 w-full bg-gray-600' />

            <p className={`text-red-500 font-bold my-2 mx-2 ${!isSignInForm && check && "text-green-500"}`}>{errorMessage && errorMessage}</p>


            <button className='p-4 mx-2 my-4 bg-red-700 w-full active:bg-red-500 rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p onClick={()=>(toggleSignInForm(),
              setErrorMessage(null))} className='underline hover:cursor-pointer active:text-yellow-400'>{isSignInForm?"New to netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login