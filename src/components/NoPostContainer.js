import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 2em;
`;

const StyledTitle = styled.h3`
  text-align: center;
  margin-bottom: 1em;
  font-style: italic;
  font-family: "Roboto Condensed", sans-serif;
  color: #f44336;
`;

export default function NoPostContainer() {
  return (
    <StyledContainer>
      <StyledTitle>No posts found!</StyledTitle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="3em"
        height="3em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="#f44336"
          d="M10.25 10a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0Zm6 0a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0Zm-.5 4c-.85 0-1.757.213-2.541.519c-.777.302-1.514.724-1.99 1.2a.75.75 0 1 0 1.061 1.06c.275-.274.803-.602 1.473-.862c.66-.257 1.379-.418 1.997-.418h.6a.75.75 0 0 0 0-1.5h-.6Zm6.252-2c0-5.524-4.478-10.002-10.002-10.002C6.476 1.998 2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.478 10.002-10.001ZM3.499 12a8.502 8.502 0 1 1 17.003 0a8.502 8.502 0 0 1-17.003 0Z"
        />
      </svg>
    </StyledContainer>
  );
}
