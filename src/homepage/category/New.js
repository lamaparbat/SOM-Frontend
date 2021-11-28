import React from 'react';
import Card from './Card';
import { ArrowDropDownCircleOutlined} from '@material-ui/icons'

function New() {
 return (
  <div className="container py-3 featuredContainer">
   <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10  bg-">
      <h4 className="mx-1 font-monospace">
      <b>New Stories</b>
      <ArrowDropDownCircleOutlined className="text-secondary loadIcon2"
       style={{
        fontSize: "30px",
        transform: "rotate(270deg)",
        marginLeft:"100px",
        cursor: "pointer"
       }} />
     </h4>
     <div className="d-flex cardRows">
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <div className="align-items-center loadIcon">
       <ArrowDropDownCircleOutlined className="text-secondary"
        style={{
         fontSize: "40px",
         transform: "rotate(270deg)",
         position:"relative",
         left:"50px",
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

export default New
