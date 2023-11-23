import React from 'react'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify';


function Home() {
    const location = useLocation()
    
    const username = location.state ? location.state.id:null;
    const navigate = useNavigate();
    const handlelogout= ()=>{
      toast.success('Logged out successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/login')}

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-gray-800 dark:text-white"> Welcome, {username ? username : 'register/login app'}</h1>
      
      {username ? (
          // If user is logged in, show Log Out button
          <button
            className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full max-w-md mx-auto mt-8 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-lg"
            type="button"
            id="rm4xcohtdc"
            onClick={handlelogout}
          >
            Log Out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </button>
        ) : (
          // If user is not logged in, show Login button
          <button
            className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full max-w-md mx-auto mt-8 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-lg"
            type="button"
            id="loginButton"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
        )}
    </div>
  </div>
  )
}

export default Home
