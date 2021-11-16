import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Featured  from './category/Featured';
import New from './category/New';
import Scifi from './category/Scifi';
import Poetry from './category/Poetry';
import Romance from './category/Romance';
import Short from './category/Short';
import './Homepage.css';

function Homepage() {
 const navigate = useNavigate()
 
 useEffect(() => {
  //redirect if login
  const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
  if (isLogin) {
   if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
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
   <Scifi />
   <Poetry />
   <Romance />
   <Short />
   {/* 
      
   <Adventure />
   <Horror />
   <Paranormal />
   <Fantansy />
   <Historical />
   <Thriller />
 */}
  </div>
 )
}

export default Homepage
