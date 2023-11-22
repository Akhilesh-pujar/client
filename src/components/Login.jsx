import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = async function submit(e){
        e.preventDefault();  

            axios
    .post("http://localhost:8000/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.message === "Login successful") {
        toast.success('You have successfully logged in!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Assuming you have access to the 'history' object
        history("/", { state: { id: email } });
      } else {
        // Invalid credentials or other error
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((error) => {
      // Network error or other unexpected issues
      toast.error('An unexpected error occurred.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.error(error);
    });

        
      

    }
  return (



<div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Log In</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Please enter your credentials to login.</p>
    </div>
    <div className="mt-8">
        <form onSubmit={handleSubmit}>
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
            required=""
            type="text"
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
            required=""
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
      </div>
      <a className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-4" href="/">
        Forgot Password?
      </a>
      <a className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-4" href="/signup">
        Already have an account? Log In
      </a>
      <button
        className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg"
        type="submit"
      
      >
        Log In
      </button>
      </form>
      
    </div>
  </div>
  {/* <ToastContainer /> */}
</div>
   
  )
}

export default Login
