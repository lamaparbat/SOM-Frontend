import {React, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/Login.css';
import { EmailOutlined, ArrowBack, VpnKey, EmailSharp } from '@material-ui/icons/';
import '../../../frontend/src/welcome/Welcome.css';
import { validate } from 'react-email-validator';
import axios from 'axios';

function Login() {
 //form input handling
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [result, setResult] = useState("");
  const [color, setColor] = useState("success");
 
 
 const navigate = useNavigate()
 

 useEffect(() => {
  //redirect if login
  const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
  if (isLogin) {
    if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
      navigate("/Homepage")
    } else {
      navigate("/Login")
    }
  }
 }, [])
 
 //handling onchange error due to the use of useRef 
 const change = (e) => {
 if(e.target.name === "email") {
   setEmail(e.target.value)
  } else {
   setPassword(e.target.value)
  }
 }
 
 const login = () => {
  if (email && password && validate(email)) {
    axios.post("https://ted-story.herokuapp.com/login", {
    email: email,
    password:password
   }).then((res) => {
    if (res.data.check) {
     //localstorage set online statUS
     console.log("json ",JSON.parse(localStorage.getItem('SOM')).check === false);
      if (JSON.parse(localStorage.getItem('SOM')).check === false) {
        localStorage.setItem("SOM", JSON.stringify(res.data))
      setResult("Login Successfull !!");
      setColor("success")
      setTimeout(() => {
        navigate("/Homepage")
        window.location.assign("/")
      }, 1000);
     }
    } else {
     setResult("Wrong email or password !!");
     setColor("danger")
    }
   })
  } else {
   setResult("Invalid email or password !!");
   setColor("danger")
  }
 }

 return (
  <>
   <div className="main_container">
    <div className="form">
     <h5 className="font-monospace"><strong><ArrowBack id="arrowback"  style={{ marginTop: "-5px", marginLeft: "-5px" }} /> SIGNUP INTO TED_STORIES</strong></h5><br />
     <div className="bg-light d-flex align-items-center emailInput">
      <EmailSharp className="mx-2" />
      <input type="email" name="email" className="form-control border-0 p-2 shadow-none" value={email} onChange={change} placeholder="Enter email" />
     </div><br />
     <div className="bg-light d-flex align-items-center emailInput">
      <VpnKey className="mx-2" />
      <input name="password" type="password" className="form-control border-0 p-2 shadow-none" value={password} onChange={change} placeholder="Enter password" />
     </div><br />
     <center><span className={"mb-3 text-" + color}>{result}</span></center>
     <Link className="homelink d-none" to="/Homepage" />
     <button type="button" className="btn mt-2 form-control btn-danger py-2 px-5 font-monospace shadow-none rounded-0 text-whitesmoke" style={{ width: "305px" }} onClick={login}> SUBMIT </button><br />
     <center className="my-2"><span> --- OR ---</span></center>
     <button className="btn form-control btn-danger py-2 px-5 font-monospace shadow-none rounded-0 text-whitesmoke"><EmailOutlined style={{ marginTop: "-2px" }} />&nbsp; SIGNIN WITH GOOGLE </button><br />
    </div>
   </div>
  </>
 )
}

export default Login
