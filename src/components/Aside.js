import {useState} from "react";
import styled from "styled-components";

const StyledAside = styled.aside`
  section {
    position: sticky;
    top: 2em;
    padding: 1em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.2em;
    margin-bottom: 1em;
    min-width: 200px;
  }

  form + form {
    margin-top: 1em;
  }

  h3 {
    font-family: "Roboto Condensed", sans-serif;
    color: #22272a;
    margin-bottom: 0.3em;
  }

  input[type="text"] {
    font-family: "Roboto", sans-serif;
    padding: 0.4em;
    border: none;
    // box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    background: #d2dcde21;
    width: 100%;
  }

  input + input {
    margin-top: 0.3em;
  }

  input[type="submit"] {
    margin-top: 1em;
    width: 100%;
    font-family: "Roboto Condensed", sans-serif;
    padding: 0.5em;
    border: none;
    cursor: pointer;
    background: #d2dcde;
    font-weight: bolder;
    font-size: 1em;
  }

  input[type="submit"]:hover {
    background: #2c6380;
    color: #fff;
    transition: 100ms;
  }

  .submit-container {
    position: relative;
  }

  @media (min-width: 800px) {
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    padding: 2em 1em;
  }
`;

export default function Aside({searchPosts, searchQuery, addPost}) {
  const [newPostData, setNewPostData] = useState({
    title: "",
    body: "",
  });

  function handleFormData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewPostData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <StyledAside>
      <section>
        <form>
          <label>
            <h3>Search post</h3>
          </label>
          <input
            className="submit-btn"
            type="text"
            placeholder="eum et est..."
            onChange={searchPosts}
            value={searchQuery}
          />
        </form>
        <form>
          <label>
            <h3>Create new post</h3>
          </label>
          <input
            type="text"
            placeholder="title..."
            value={newPostData.title}
            name="title"
            onChange={handleFormData}
            required
          />
          <input
            type="text"
            placeholder="body..."
            value={newPostData.body}
            name="body"
            onChange={handleFormData}
            required
          />
          <div className="submit-container">
            <input
              type="submit"
              value="Add"
              onClick={(e) => {
                e.preventDefault();
                addPost(newPostData);
                setNewPostData({title: "", body: ""});
              }}
            />
          </div>
        </form>
      </section>
    </StyledAside>
  );
}
