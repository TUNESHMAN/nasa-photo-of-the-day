import React from "react";


function Cards(props) {
   

  return <div className = 'card-display'>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <h3>{props.explanation}</h3>
      <h4>{props.url}</h4>
      <h2>{props.media_type}</h2>
      
      

  </div>;
}

export default Cards;
