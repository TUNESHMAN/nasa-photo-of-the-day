import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  color: burlywood;
  font-size: 40px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  
  
`;

function Header() {
  return (
    <div>
      <Heading>N.A.S.A ✈️</Heading>
    </div>
  );
}

export default Header;
