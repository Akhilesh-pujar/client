import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { ToastContainer } from 'react-toastify';
import Userhome from "./components/Userhome";


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/userhome" element={<Userhome/>}/>
         
        
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
