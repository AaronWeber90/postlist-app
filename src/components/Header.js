import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2em;
  width: 100%;
  background: linear-gradient(to right, #d2dcde, #d2dcde);

  & div {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <div>
        <h1>Aarons Postlist App</h1>
      </div>
    </StyledHeader>
  );
}
