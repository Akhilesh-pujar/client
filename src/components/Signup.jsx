import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [username,setusername]=useState({})
    const [password,setPassword]=useState('')


    const handleSubmit = async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                username,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
  return (
<div class="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div class="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
    <div class="text-center">
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Sign Up</h2>
      <p class="text-gray-600 dark:text-gray-400 mt-2">Please enter your details to create an account.</p>
    </div>
    <div class="mt-8">
        
        
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="username"
          >
            Username
          </label>
          <input
            class="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            id="username"
            placeholder="Username"
            required="true"
            type="text"
            onChange={(e) => { setusername(e.target.value) }}
          />
        </div>
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="email"
          >
            Email
          </label>
          <input
            class="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            id="email"
            placeholder="Email"
            required="true"
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-200"
            for="password"
          >
            Password
          </label>
          <input
            class="flex h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
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
  </div>
</div>
  )
}

export default Signup
