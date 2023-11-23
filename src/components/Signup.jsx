import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [username,setusername]=useState({})
    const [password,setPassword]=useState('')


    const handleSubmit = async function submit(e){
        e.preventDefault();

         axios.post("https://client-tawny-iota.vercel.app/api/signup",{
                username,email,password
            })
            .then((response)=>{
                
                  toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                
                history("/login" );
            }) 
            .catch(e=>{
              toast.error(e.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
             
            })

       

    }
  return (
<div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Sign Up</h2>
      <p className ="text-gray-600 dark:text-gray-400 mt-2">Please enter your details to create an account.</p>
    </div>
    <form onSubmit={handleSubmit}>
    <div class="mt-8">
  
        
      <div className="flex flex-col space-y-4">
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="username"
          >
            Username
          </label>
          <input
            className="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            id="username"
            placeholder="Username"
            required="true"
            type="text"
            onChange={(e) => { setusername(e.target.value) }}
          />
        </div>
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="email"
          >
            Email
          </label>
          <input
            className="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            id="email"
            placeholder="Email"
            required="true"
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="password"
          >
            Password
          </label>
          <input
            className="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            id="password"
            placeholder="Password"
            required="true"
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        
      </div>
      <a className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-4" href="/">
        Already have an account? Log In
      </a>
    </div>
    <button
        className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg"
        type="submit"
        onSubmit={handleSubmit}
      >
       Sign Up
      </button>
      </form>
      
  </div>
</div>
  )
}

export default Signup
