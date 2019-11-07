import React from "react";

function Cards(props) {
  return (
    <div className="card-display">
      <h2>{props.title}</h2>
      <h3>{props.explanation}</h3>
      <img src={props.url} alt = {props.media_type} />
      <h3>{props.date}</h3>
    </div>
  );
}

export default Cards;
