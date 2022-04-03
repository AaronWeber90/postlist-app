import styled from "styled-components";

const StyledPopup = styled.div`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  font-family: "Roboto", sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f44336;
`;

export default function Popup({text}) {
  return (
    <StyledPopup>
      <span>{text}</span>
    </StyledPopup>
  );
}
