
export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a href="/Signup" className="mr-5 hover:text-gray-900"> Signup Page</a>
        <a href="/login" className="mr-5 hover:text-gray-900"> Login Page</a>
 
      </nav>
      <a href="/" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Home
       
      </a>
      
    </div>
  </header>
  )
}


