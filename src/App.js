import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Welcome from "./welcome/Welcome";
import Homepage from "./homepage/Homepage";
import Login from './login/Login';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    //redirect if login
    const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
    if (JSON.parse(localStorage.getItem('SOM')).login !== false) {
      navigate("/Homepage")
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
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
