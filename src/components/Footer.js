import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2em;
  width: 100%;
  background: linear-gradient(to right, #d2dcde, #d2dcde);
  font-family: "Roboto", sans-serif;

  & div {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    font-size: 0.7rem;
  }
`;

export default function Header(props) {
  return (
    <StyledFooter>
      <div>by Aaron</div>
    </StyledFooter>
  );
}
