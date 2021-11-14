import React from 'react'
import Card from './Card'
function New() {
 return (
  <div className="container py-3 featuredContainer bg-">
   <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10  bg-">
     <h5 className="mx-1"><b>New Stories</b></h5>
     <div className="d-flex">
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
      <Card img={""} id={2} />
     </div>
    </div>
    <div className="col-sm-1"></div>
   </div>
  </div>
 )
}

export default New
