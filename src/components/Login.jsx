import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function Login() {
    const history=useNavigate();

    const [username,setusername]=useState('')
    const [password,setPassword]=useState('')
    const [role, setRole] = useState('user'); 

    const handleSubmit = async function submit(e){
        e.preventDefault();  

     try{
      const response = await axios.post(`${process.env.REACT_APP_API}/api/login`, {        
        username,
        password,
        role,
      });
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
      
      const userRole = response.data.role;
      // Redirect based on user role
 if (userRole === 'Admin') {
   // Redirect to the admin homepage
   history("/",{state:{id:username,role:role}} );// Replace with your admin homepage route
 } else {
   // Redirect to the user homepage
   history("/userhome",{state:{id:username,role:role}} ); // Replace with your user homepage route
 }
 
 

     }
  
catch(e){
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
 
}

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
            required="true"
            type="text"
            onChange={(e) => { setusername(e.target.value) }}
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
        <div className="flex flex-col space-y-4">
        <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="email"
          >
            Role
          </label>
        <select className='flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-2 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500
         focus:outline-none focus:bg-white dark:focus:bg-gray-600' value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        </div>
      </div>
      <a className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-4" href="/">
        Forgot Password?
      </a>
      <a className="text-sm text-gray-600 dark:text-gray-400 hover:underline mt-4" href="/signup">
        Don't have a account Sign Up
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
