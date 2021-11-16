import React from 'react'

function Card(props) {
 return (
  <div className="card my-2 mx-1">
   <img src={props.img} className="img-fluid" style={{height:"100%"}}  />
  </div>
 )
}

export default Card
