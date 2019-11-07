import React, { useState } from "react";
import styled from "styled-components";

const SubHeading = styled.h2`
  font-size: 20px;
`;

const Image = styled.img`
  width: 70%;
  height: 350px;
  border-radius: 20px;
`;

const Description = styled.h4`
  font-size: 15px;
  font-weight: normal;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2;
  display: flex;
  justify-content: center;
`;
const BUTTON = styled.button`
  color: black;
  background-color: gray;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  font-weight: bold;
  outline: none;
`;

function Cards(props) {
  const [visible, setVisible] = React.useState(false);
  
  return (
    <div className="card-display">
      <div>
        <SubHeading>{props.title}</SubHeading>
        <h3>{props.date}</h3>
      </div>
      {visible ? <Image src={props.url} alt={props.media_type} /> : null}

      <Description>{props.explanation}</Description>
      
      <BUTTON onClick={() => setVisible(!visible)}>{visible ? "HIDE IMAGE": "SHOW IMAGE"}</BUTTON>
    </div>
  );
}

export default Cards;
