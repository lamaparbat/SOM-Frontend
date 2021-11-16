import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Welcome from "./welcome/Welcome";
import Homepage from "./homepage/Homepage";
import Login from './login/Login';
import CreateStories from './CreateStories';
import axios from 'axios';

function App() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    //redirect if login
    const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
    if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
      // navigate("/Homepage")
      const token = JSON.parse(localStorage.getItem("SOM")).token;
    } else {
      navigate("/")
    }
  }, [])
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateStories" element={<CreateStories />} />
      </Routes>
    </div>
  );
}

export default App;
