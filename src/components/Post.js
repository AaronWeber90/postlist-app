import { useState } from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  border: 0px solid black;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.2em;
  overflow: hidden;
  font-size: 1rem;

  & + & {
    margin-top: 1em;
  }
`;

const StyledTitle = styled.div`
  border: 0px solid black;
  cursor: pointer;
  padding: 0 2em 0 0;
  position: relative;
  color: #22272a;
  transition: 100ms;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 1px;

  &:hover {
    background: #d2dcde;
  }

  div {
    padding: 0.7rem;
  }

  h2 {
    font-size: 0.85em;
    font-family: "Roboto", sans-serif;
    color: #22272a;
  }

  &.open-post {
    background: #2c6380;
    color: #fff;
  }

  &.open-post h2 {
    color: #fff;
  }
`;

const StyledBody = styled.div`
  padding: 0.7rem;
  color: #22272a;
  font-size: 0.8em;
  line-height: 1.4;
  font-family: "Roboto", sans-serif;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0.7em;
  top: 0.7em;
  font-size: 0.7em;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  color: inherit;
`;

export default function Post({ id, title, body, onClick }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledPost>
      <StyledTitle className={isActive ? "open-post" : null}>
        <div onClick={() => setIsActive(!isActive)}>
          <h2>{title}</h2>
        </div>
        <StyledButton onClick={() => onClick(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2.1em"
            height="2.1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" />
            </g>
          </svg>
        </StyledButton>
      </StyledTitle>
      {isActive && <StyledBody>{body}</StyledBody>}
    </StyledPost>
  );
}

//https://web.dev/building-a-color-scheme/
