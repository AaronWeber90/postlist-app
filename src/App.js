import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import NoPostContainer from "./components/NoPostContainer";
import Post from "./components/Post";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const StyledContainer = styled.main`
  max-width: 600px;
  margin: 0 auto;
  background: fff;
  padding: 2em 1em;
  position: relative;
  min-height: 100vh;
`;

export default function App() {
  const [isLoading, setIsloading] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPosts, setFoundPosts] = useState([]);
  const mainRef = useRef(null);

  useEffect(() => {
    setIsloading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
        setFoundPosts(data);
        setIsloading(false);
      });
  }, []);

  function handleChange(event) {
    const keyword = event.target.value;
    if (keyword) {
      mainRef.current.scrollIntoView({
        behavior: "smooth",
      });
      const result = postsData.filter((post) => {
        return post.title.includes(searchQuery.toLowerCase());
      });
      setFoundPosts(result);
    } else {
      setFoundPosts(postsData);
    }
    setSearchQuery(keyword);
    console.log(postsData);
  }

  function handleClick(id) {
    console.log(id);
    setPostsData((prevState) => prevState.filter((post) => post.id !== id));
    setFoundPosts((prevState) => prevState.filter((post) => post.id !== id));
    console.log(postsData.length);
  }

  function addPost({ title, body }) {
    if (title !== "" && body !== "") {
      setPostsData((prevPosts) => [
        ...prevPosts,
        { userId: "", id: prevPosts[prevPosts.length - 1].id + 1, title, body },
      ]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer ref={mainRef}>
        <Aside
          handleChange={handleChange}
          searchQuery={searchQuery}
          addPost={addPost}
        />
        {/* <input
          type="text"
          placeholder="eum et est..."
          value={searchQuery}
          onChange={handleChange}
        /> */}
        {isLoading && <LoadingSpinner />}
        {searchQuery && !foundPosts.length && <NoPostContainer />}
        {!searchQuery.length
          ? postsData.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))
          : foundPosts.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))}
      </StyledContainer>
      <Footer />
    </>
  );
}
