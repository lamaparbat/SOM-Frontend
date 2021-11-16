import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ArrowDropDown, ExitToApp, Person } from '@material-ui/icons/';
import { Avatar } from '@material-ui/core';

//navbar component
const Navbar = () => {
  const [isLogin, setIsLogin] = useState("none");
  const [isBrowse, setBrowse] = useState("none");
  const [loginChange, setLoginChange] = useState("no");
  const [userData, setUserData] = useState([])
  const [dropdown, setDropdown] = useState("none")
  
  const browseDropdownVal = [
    "Adventure",
    "Horror",
    "Paranormal",
    "Scifi",
    "Poetry",
    "Romance",
    "Fantasy",
    "Historical",
    "Thriller",
    "Short Story"
  ];

  const navigate = useNavigate()
  useEffect(() => {
    //redirect if login
    console.log(JSON.parse(localStorage.getItem('SOM')).check)
    setIsLogin(JSON.parse(localStorage.getItem('SOM')).check != false ? true : false);
    if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
      setUserData(JSON.parse(localStorage.getItem('SOM')));
      navigate("/Homepage")
    } else {
      navigate("/")
    }
  }, [loginChange])

  const redirectLogin = () => {
    document.querySelector(".redirectLogin").click();
  }
  const redirectHome = () => {
    document.querySelector(".redirectHome").click();
  }
  const showOption = () => {
    dropdown === "block" ? setDropdown("none") : setDropdown("block")
  }

  const setClickedBrowse = () => {
    setBrowse(isBrowse === "none" ? "block" : "none");
  }

  const setClickedBrowseDropdown = (val) => {
    alert(val)
  }
  
  const setCurrentDropdown = (val) => {
    if (val === "CREATE A NEW STORIES") {
      navigate("/CreateStories");
    }
  }


  const logout = () => {
    const token = JSON.parse(localStorage.getItem("SOM")).token;
    localStorage.setItem("SOM", JSON.stringify({
      uname: userData.uname,
      email:userData.email,
      token: token,
      check: false,
      message:"Logout successfully!"
    }));
    setLoginChange("yes")
  }

  return (
    <>
      <div className="container navbar py-2 bg-">
        <span className="font-monospace" onClick={redirectHome}><strong>TED_STORIES</strong></span>
        <Link className="d-none redirectLogin" to="/Login" />
        <Link className="d-none redirectHome" to="/Homepage" />
        <div className="d-flex">
          <button className={isLogin ? "btn btn- text-dark me-2 font-monospace shadow-none d-block" : "btn btn- text-dark me-2 font-monospace shadow-none d-none"} onClick={setClickedBrowse}> Browse <ArrowDropDown style={{ marginTop: "-4px" }} />
            <ul className={"px-4 py-2 list d-" + isBrowse} style={{ width: "200px", zIndex: "44" }}>
              {
                browseDropdownVal.map((val, index) => {
                  return (
                    <li className="p-2" onClick={() => setClickedBrowseDropdown(val)} key={index}>{val}</li>
                  )
                })
              }
            </ul>
          </button>
          <button className={isLogin ? "btn btn- text-dark me-2 font-monospace shadow-none d-block" : "btn btn- text-dark me-2 font-monospace shadow-none d-none"} onClick={showOption}>Activity<ArrowDropDown style={{ marginTop: "-4px" }} />
            <ul className={"list d-" + dropdown} style={{ width: "150px", zIndex: "44"}}>
              <li className="my-2" onClick={() => setCurrentDropdown("CREATE A NEW STORIES")}>CREATE A NEW STORIES</li>
              <li onClick={() => setCurrentDropdown("MY STORIES")}>MY STORIES</li>
            </ul>
          </button>
          <button className={isLogin ? "btn text-dark me-4 font-monospace shadow-none d-none" : "btn text-dark me-4 font-monospace shadow-none d-block"} onClick={redirectLogin}><Person style={{ marginTop: "-4px" }} /> SIGNIN</button>
          <button className={isLogin ? "btn text-dark me-4 font-monospace shadow-none  d-block " : "btn text-dark me-4 font-monospace shadow-none  d-none"} onClick={logout}><ExitToApp style={{ marginTop: "-4px" }} /> LOGOUT</button>
          <div className={isLogin ? "d-flex px-3 py-1 account" : "d-none px-3 py-1 account"}>
            <Avatar src={process.env.PUBLIC_URL + "/img/banner.png"} className="img-fluid me-2" style={{ marginTop: "1px", height: "30px", width: "30px" }} />
            <h6 className="mx-2 mt-2 font-monospace">{userData.uname}</h6>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;