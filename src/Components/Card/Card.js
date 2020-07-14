import React from "react";
import "./Card.css";

function Card(props) {
  return (
    //this CSS designs the individual card
    <div className="card">
      <span>
        <img className="image" src={props.image} alt="logo" />
        <span> </span>
        <b> {props.title} </b>
      </span>
      <p>{props.description}</p>
      <b>by: {props.authors}</b>
    </div>
  );
}
export default Card;
