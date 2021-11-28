import { React, useEffect, useState } from 'react';
import '../homepage/SelectedStory.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Star, ModeComment, MoreVert, MoreHoriz } from '@material-ui/icons/'
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';

function SelectedStory() {
 const data = useSelector((state) => state.storySelection);
 const [storyData, setData] = useState();
 const userData = JSON.parse(localStorage.getItem("SOM"));
 console.log(userData)
 useEffect(() => {
  setData(data);
 }, [data])
 
 const Comment = () => {
  return (
   <>
    <div className="comment pe-3 mt-4">
     <div className="header d-flex justify-content-between">
      <div className="d-flex">
       <Avatar className="me-2" style={{ height: "35px", width: "35px" }} />
       <div>
        <span className="font-monospace" style={{ fontSize: "14px" }}>Manish Ghising</span><br />
        <p style={{ fontSize: "12px", marginTop: "-3px", color: "rgb(116, 116, 116)" }}>12:30 pm</p>
       </div>
      </div>
      <MoreHoriz />
     </div>
     {/* comment text */}
     <p
      style={{ marginTop: "-20px", marginLeft: "40px", color: "rgb(116, 116, 116)" }}>
      Hi this is so much useful and best platform for sharing our feeling
      Hi this is so much useful and best platform for sharing our feeling
      </p>
    </div>
   </>
  )
 }

 return (
  storyData ?
   <>
    <div className="container selectedStory bg-">
     <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
       <img src={storyData.img}
        height="300px"
        width="200P"
        loading="lazy"
       />
       <div className="cardDesc bg-">
        <h4>{storyData.title}</h4>
        <div className="d-flex">
         <div>
          <VisibilityIcon id="visibleIcon" />
          <span id="no"> <strong>{storyData.views}</strong></span>
         </div>
         <div className="mx-3">
          <Star id="loveIcon" />
          <span id="no"> <strong>{storyData.likes}</strong></span>
         </div>
         <div className="">
          <ModeComment id="commentIcon" />
          <span id="no"> <strong>{storyData.likes}</strong></span>
         </div>
        </div>
        <h6 className="mt-3 font-monospace"><strong>Author:</strong> {storyData.author}</h6>
        <h6 className="my-2 font-monospace"><strong>Category:</strong> {storyData.category}</h6>
        <h6 className="my-2 font-monospace"><strong>Language:</strong> {storyData.language}</h6>
        <h6 className="my-2 font-monospace"><strong>Created:</strong> {storyData.author}</h6>
        <h6 className="mt-3 font-monospace">Share</h6>
        <div className="d-flex">
         <img src={process.env.PUBLIC_URL + "/img/fb.png"} style={{ height: "50px", width: "50px" }} />
         <img src={process.env.PUBLIC_URL + "/img/insta.png"} style={{ height: "50px", width: "50px" }} />
         <img src={process.env.PUBLIC_URL + "/img/twit.png"} style={{ height: "50px", width: "50px" }} />
        </div>
       </div>
       <div className="bg- storyText">
        <p className="text font-monospace p-1">{storyData.description}</p><br />

        {/* comment section */}
        <div className="commentSection">
         <div className="header d-flex">
          <Avatar src={storyData.img} />
          <textarea className="py-1 px-3 mx-3" id="cmntInput" placeholder="Leave a comment"></textarea>
         </div>
         <Comment />
         <Comment />
         <Comment />
         <Comment />
        </div>

       </div>
      </div>
      <div className="col-sm-1"></div>
     </div>
    </div>
   </> : null
 )
}

export default SelectedStory
