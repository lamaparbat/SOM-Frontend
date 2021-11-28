import React from 'react';
import { useNavigate } from 'react-router-dom';
import { selectedStory } from '../../Redux/action';
import { useDispatch } from 'react-redux';

function Card(props) {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 
 const SelectedStory = (props) => {
  dispatch(selectedStory(props))
  navigate("/SelectedStory");
 }
 return (
  <div className="card my-2 mx-1" onClick={() => SelectedStory(props)}>
   <img
    src={props.img}
    className="img-fluid"
    style={{ height: "100%" }}
    loading="lazy"
   />
  </div>
 )
}

export default Card
