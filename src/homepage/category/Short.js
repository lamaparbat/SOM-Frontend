import React from 'react';
import Card from './Card';
import '../category/cardRows.css';
import { ArrowDropDownCircleOutlined } from '@material-ui/icons'

function Short() {
 return (
  <div className="container py-3 featuredContainer bg-">
   <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10  bg-">
     <h5 className="mx-1">
      <b>Short Stories</b>
      <ArrowDropDownCircleOutlined className="text-secondary loadIcon2"
       style={{
        fontSize: "30px",
        transform: "rotate(270deg)",
        marginLeft: "90px",
        cursor: "pointer"
       }} />
     </h5>
     <div className="d-flex cardRows">
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <div className="loadIcon align-items-center">
       <ArrowDropDownCircleOutlined className="text-secondary"
        style={{
         fontSize: "40px",
         transform: "rotate(270deg)",
         position: "relative",
         left: "50px",
         cursor: "pointer"
        }} />
      </div>
     </div>
    </div>
    <div className="col-sm-1"></div>
   </div>
  </div>
 )
}

export default Short
