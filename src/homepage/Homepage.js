import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Featured  from './category/Featured';
import New from './category/New';
import './Homepage.css';

function Homepage() {
 const navigate = useNavigate()
 
 useEffect(() => {
  //redirect if login
  const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
  if (isLogin) {
   if (JSON.parse(localStorage.getItem('SOM')).login !== false) {
    navigate("/Homepage")
   } else {
    navigate("/")
   }
  }
 }, [])
 
 return (
  <div className="container postContainer bg-">
   <Featured />
   <New />
   {/* 
      
   <Adventure />
   <Horror />
   <Paranormal />
   <Scifi />
   <Poetry />
   <Romance />
   <Fantansy />
   <Historical />
   <Thriller />
   <Short /> */}
  </div>
 )
}

export default Homepage
