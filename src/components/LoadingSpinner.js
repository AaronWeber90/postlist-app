import styled from "styled-components";

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
  border: 10px solid #f3f3f3;
  border-top: 10px solid #383636;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

export default function LoadingSpinner() {
  return (
    <div>
      <StyledSpinner></StyledSpinner>
    </div>
  );
}
