import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateStories.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';


function CreateStories() {
 const navigate = useNavigate()
 const [img, setImg] = useState();
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [userdata, setUserdata] = useState([])
 
 //toast 
 const success = () => toast("Story Successfully uploaded !!")

 useEffect(() => {
  setUserdata(JSON.parse(localStorage.getItem("SOM")))
  //redirect if login
  const isLogin = JSON.parse(localStorage.getItem('SOM')) != null ? true : false;
  if (isLogin) {
   if (JSON.parse(localStorage.getItem('SOM')).check !== false) {
    navigate("/CreateStories");
   } else {
    navigate("/")
   }
  }
 }, [])

 const selectImage = () => {
  document.querySelector(".img").click();
  document.querySelector(".img").addEventListener("change", () => {
   setImg(document.querySelector(".img").files[0]);
  })
 }
 const submitData = (e) => {
  e.preventDefault();
  let data = document.querySelector(".createStories .row .col-sm-10 .row .col-sm-7 #form")
  let desc = document.querySelector(".createStories .row .col-sm-10 .row .col-sm-7 #form #description").value
  const formData = new FormData();
  formData.append("title", data.title.value);
  formData.append("description", desc);
  formData.append("category", data.category.value);
  formData.append("language", data.language.value);
  formData.append("img", img);
  //sending data to server
  //https://ted-story.herokuapp.com/uploadProject
  axios.post("https://ted-story.herokuapp.com/uploadProject", formData);
 }

 const change = (e) => {
  if (e.target.name === "title") {
   setTitle(e.target.value)
  } else {
   setDescription(e.target.value)
  }
 };

 return (
  <div className="container py-3 createStories bg-">
   <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10 ">
     <div className="row">
      <div className="col-sm-5 bg-">
       <div className="imgContainer">
        <input type="file" className="img d-none" name="img" />
        <img
         src={process.env.PUBLIC_URL + "/img/imgIcon.png"}
         style={{ height: "100px", width: "100px" }}
         alt="cover image"
         onClick={selectImage}
        />
       </div>
      </div>
      <div className="col-sm-7 px-4 pt-4 pb-4 bg-">
       <form onSubmit={submitData} encType="multipart/form-data" id="form">
        <h5><b>Story Details</b></h5><hr />
        <h5><b>Title</b></h5>
        <input className="form-control shadow-none" type="text" name="title" value={title} onChange={change} placeholder="Untitled Story" /><br />
        <h5><b>Description</b></h5>
        <textarea className="form-control shadow-none" type="text" id="description" value={description} onChange={change} placeholder="Untitled Story" style={{ height: "200px" }} ></textarea><br />
        <h5><b>Category</b></h5>
        <select className="form-select" id="category" name="category">
         <option value="Select a category">Select a category</option>
         <option value="Romance">Adventure</option>
         <option value="Romance">Horror</option>
         <option value="Romance">Paranormal</option>
         <option value="Romance">Scifi</option>
         <option value="Romance">Poetry</option>
         <option value="Romance">Romance</option>
         <option value="Romance">Fantasy</option>
         <option value="Romance">Historical</option>
         <option value="Romance">Thriller</option>
         <option value="Romance">Short Story</option>
   
        </select><br />
        <h5><b>Language</b></h5>
        <select className="form-select" id="language" name="language">
         <option value="Select a language">Select a Languages</option>
         <option value="English">English</option>
         <option value="Roman">Roman</option>
         <option value="Greek">Greek</option>
         <option value="Hindi">Hindi</option>
         <option value="Nepali">Nepali</option>
         <option value="Spanish">Spanish</option>
         <option value="Italian">Italian</option>
        </select><br />
        <button type="submit" className="btn btn-danger px-5 rounded-0">Upload Story</button>
       </form>
      </div>
     </div>
    </div>
    <div className="col-sm-1"></div>
   </div>
   <ToastContainer />
  </div>
 )
}

export default CreateStories
