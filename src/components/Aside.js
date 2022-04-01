import react from "react";
import styled from "styled-components";

const StyledAside = styled.aside`
  padding: 2em 1em;

  @media (min-width: 500px) {
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
  }

  div {
    position: sticky;
    top: 2em;
    padding: 1em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.2em;
  }

  form + form {
    margin-top: 1em;
  }
`;

export default function Form() {
  return (
    <StyledAside>
      <div>
        <form>
          <label>
            <h3>Search post</h3>
          </label>
          <input type="text" placeholder="eum et est..." />
        </form>
        <form>
          <label>
            <h3>Create new post</h3>
          </label>
          <input type="text" placeholder="title..." />
          <input type="text" placeholder="body..." />
          <button>Add</button>
        </form>
      </div>
    </StyledAside>
  );
}
