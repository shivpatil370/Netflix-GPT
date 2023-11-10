import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user=useSelector(store=>store.user);
  console.log(user);
  const navigate=useNavigate();

     const HandleSignout=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
     }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
        <div className='flex items-center'>
          <img className='w-8 h-8' src={user?.photoURL||"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"} alt="sign-out" />
          <button onClick={HandleSignout} className='bg-red-500 font-bold text-white py-1 px-2 ml-1 active:bg-red-800'>Sign Out</button>
        </div>
    </div>
  )
}

export default Header