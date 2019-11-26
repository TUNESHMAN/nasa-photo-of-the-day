import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Container() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=U8fI0KD04W8rVLSSvIuey7l15F6OCvFc7f5Zlc5N"
      )
      .then(response => {
        console.log(response.data);
        // Setting Items to state
        setNasa(nasa.concat(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="holder">
      {
        nasa.map((element, index) => {
        return (
          <Cards
            key={index}
            date={element.date}
            explanation={element.explanation}
            hdurl={element.hdurl}
            title = {element.title}
            url ={element.url}
            media_type = {element.media_type}
          />
        );
      })}
      
    </div>
  );
}

export default Container;
