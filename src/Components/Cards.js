import React from "react";
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

`

function Cards(props) {
  return (
    <div className="card-display">
    <div>
      <SubHeading>{props.title}</SubHeading>
      <h3>{props.date}</h3>
      </div>
      <Image src={props.url} alt={props.media_type} />
      <Description>{props.explanation}</Description>
      
    </div>
  );
}

export default Cards;
