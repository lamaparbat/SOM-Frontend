import React from 'react';
import '../homepage/SelectedStory.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

function SelectedStory() {
 return (
  <div className="container mt-5 selectedStory bg-">
   <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10 bg-">
     <img src={"https://img.wattpad.com/cover/196362720-512-k525845.jpg"}
      height="300px"
      width="200P"
      loading="lazy"
     />
     <div className="cardDesc bg-">
      <h4>Autumn and summer story</h4>
      <div className="d-flex">
       <div>
        <VisibilityIcon />
        <span id="read"> Reads</span><br />
        <span id="no"><strong>1.3M</strong></span>
       </div>
       <div className="mx-3">
        <VisibilityIcon />
        <span id="read"> Reads</span><br />
        <span id="no"><strong>1.3M</strong></span>
       </div>
      </div>
     </div>
    </div>
    <div className="col-sm-1"></div>
   </div>
  </div>
 )
}

export default SelectedStory
