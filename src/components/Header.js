import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2em;
  width: 100%;
  background: linear-gradient(to right, #d2dcde, #d2dcde);
  font-family: "Roboto Condensed", sans-serif;
  color: #22272a;

  & div {
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 0.2em;
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1.1em"
            height="1.1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"
            />
          </svg>
          Postlist App
        </h1>
      </div>
    </StyledHeader>
  );
}
