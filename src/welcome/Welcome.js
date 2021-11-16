import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/src/welcome/Welcome.css'
import { Person, EmailOutlined, ArrowBack, VpnKey, EmailSharp } from '@material-ui/icons/';
import axios from 'axios';
import { validate } from 'react-email-validator';
import Pusher from 'pusher-js';

function Welcome() {
  const [isStartedBtnClicked, setStartedBtnClicked] = useState(false);
  
  const navigate = useNavigate()

  useEffect(() => {
    //redirect if login

    const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
    if (isLogin) {
      if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
        setTimeout(() => {
          navigate("/Homepage")
        }, 1000);
      } else {
        navigate("/")
      }   
    } 
  }, [])
  
  //welcome component
  const WelcomeText = () => {
    const loadSignupComp = () => {
      setStartedBtnClicked(true);
    }
    return (
      <>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-6 py-3">
            <img src={process.env.PUBLIC_URL + "/img/banner.png"} className="img-fluid" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4 bg- py-5 px-4 mt-1 rounded-1">
            <h3 className="font-monospace text-danger"><strong>TED_STORIES</strong></h3><br />
            <h6 className="text-center mt-2 font-monospace">The world's most-loved social storytelling platform</h6>
            <span className="text-center mt-2 font-monospace text-secondary px-3 para"> Let us connects a global community of 90 million readers and writers through the power of story. </span><br /><br />
            <button className="btn form-control btn-danger py-2 px-5 font-monospace shadow-none rounded-0 text-whitesmoke" onClick={loadSignupComp}> LET'S GET STARTED </button><br />
          </div>
        </div>
        <Footer />
      </>
    )
  }

  //signup component
  const Signup = () => {
    //form input handling
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [color, setColor] = useState("success");
    
    //redirec to welcome comp
    const loadWelcomeComp = () => {
      setStartedBtnClicked(false);
    }
    
    //create account
    const createAccount = (e) => {
      if (uname && email && password) {
        if (validate(email)) {
          const formData = {
            uname: uname,
            email: email,
            password: password,
            type: ""
          }
          axios.post('https://git.heroku.com/ted-story.git/createAccount', formData).then((res, err) => {
            if (err) {
              console.log(err)
            } else {
              setUname("");
              setEmail("");
              setPassword("");
              console.log(res.message)
            }
          })
        } else {
          setResult("Invalid email format !!");
          setColor("danger");
        }
      } else {
        setResult("please fillup all the form value !!")
        setColor("danger")
      }
    }
    
    //track the jwt after registration
    var pusher = new Pusher('079f21a2e193a4635116', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('jwt');
    channel.bind('created', function (data) {
      localStorage.setItem("SOM", JSON.stringify({
        token: data.message,
        uname: uname,
        email:email,
        check:true
      }))
    });
    
    //handling onchange error due to the use of useRef 
    const change = (e) => {
      if (e.target.name === "uname") {
        setUname(e.target.value)
      } else if (e.target.name === "email") {
        setEmail(e.target.value)
      } else {
        setPassword(e.target.value)
      }
    }
    
    return (
      <>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-6 py-4">
            <img src={process.env.PUBLIC_URL + "/img/signup.svg"} className="img-fluid" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4 bg- py-5 mt-1 rounded-1">
            <h5 className="font-monospace"><strong><ArrowBack id="arrowback" onClick={loadWelcomeComp} style={{ marginTop: "-5px", marginLeft: "-5px" }} /> SIGNUP INTO TED_STORIES</strong></h5><br />
            <div className="bg-light d-flex align-items-center emailInput">
              <Person className="mx-2" />
              <input type="text" name="uname" className="form-control border-0 p-2 shadow-none" value={uname} onChange={change} placeholder="Enter username"/>
            </div><br />
            <div className="bg-light d-flex align-items-center emailInput">
              <EmailSharp className="mx-2" />
              <input type="email" name="email" className="form-control border-0 p-2 shadow-none" value={email} onChange={change} placeholder="Enter email" />
            </div><br />
            <div className="bg-light d-flex align-items-center emailInput">
              <VpnKey className="mx-2" />
              <input name="password" type="password" className="form-control border-0 p-2 shadow-none" value={password} onChange={change} placeholder="Enter password" />
            </div><br />
            <span className={"mb-2 text-" + color}>{result}</span>
            <Link className="homelink d-none" to="/Homepage" />
            <button type="button" className="btn form-control btn-danger py-2 px-5 font-monospace shadow-none rounded-0 text-whitesmoke" style={{ width:"290px"}} onClick={createAccount}> CREATE A NEW ACCOUNT </button><br />
            <span> --- OR ---</span><br/>
            <button className="btn form-control btn-danger py-2 px-5 font-monospace shadow-none rounded-0 text-whitesmoke" onClick={createAccount}><EmailOutlined style={{marginTop:"-2px"}} />&nbsp; SIGNUP WITH GOOGLE </button><br />
          </div>
        </div>
      </>
    )
  }

  //banner
  const Banner = () => {
    return (
      <>
        <div className="container banner bg- py-4">
          {
            isStartedBtnClicked ? <Signup /> : <WelcomeText />
          }
        </div>
      </>
    )
  }

  //footer
  const Footer = () => {
    return (
      <>
        <div className="container footer ">
          <a href="#" className="text-secondary">&copy; parbatlama.com</a>
          <a href="#" className="text-secondary">Policies</a>
          <a href="#" className="text-secondary">Terms</a>
          <a href="#" className="text-secondary">Policies</a>
          <a href="#" className="text-secondary">Cookies</a>
          <a href="#" className="text-secondary">Contact</a>
        </div>
      </>
    )
  }

  return (
    <div className="">
      <Banner />
    </div>
  )
}

export default Welcome
