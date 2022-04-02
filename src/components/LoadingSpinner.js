import react from "react";
import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;
  margin: auto;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

export default function LoadingSpinner() {
  return (
    <StyledContainer>
      <StyledSpinner></StyledSpinner>
    </StyledContainer>
  );
}
