import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <span>
        <img className="image" src={props.image} alt="logo" />
        <span> </span>
        <b> {props.title} </b>
      </span>
      <p>{props.description}</p>
    </div>
  );
}
export default Card;
