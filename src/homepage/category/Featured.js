import { ArrowDropDownCircleOutlined } from '@material-ui/icons';
import React from 'react';
import Card from './Card';

function Featured() {
  return (
    <div className="container py-3 featuredContainer bg-">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10  bg-">
          <h4 className="mx-1 font-monospace">
            <b>Featured Stories</b>
            <ArrowDropDownCircleOutlined className="text-secondary loadIcon2"
              style={{
                fontSize: "30px",
                transform: "rotate(270deg)",
                marginLeft: "60px",
                cursor: "pointer"
              }} />
          </h4>
          <div className="d-flex cardRows">
            <Card
              title={"Ghost story"}
              description={"hello world"}
              language={"Roman"}
              img={"https://images.unsplash.com/photo-1636905206149-bc3217e6a198?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}
              category={"romance"}
              author={"parbat"}
              views={0}
              likes={0}
              
            />
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

export default Featured
