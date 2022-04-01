import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Post from "./components/Post";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const StyledContainer = styled.main`
  max-width: 600px;
  margin: 0 auto;
  background: fff;
  padding: 1em;
  position: relative;
  min-height: 100vh;
`;

export default function App() {
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPosts, setFoundPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
        setFoundPosts(data);
      });
  }, []);

  function handleChange(event) {
    console.log("hello");
    const keyword = event.target.value;
    if (keyword) {
      const result = postsData.filter((post) => {
        return post.title.includes(searchQuery.toLowerCase());
      });
      setFoundPosts(result);
    } else {
      setFoundPosts(postsData);
    }
    setSearchQuery(keyword);
    
  }

  useEffect(() => {}, [foundPosts]);

  function handleClick(id) {
    console.log(id);
    setPostsData((prevState) => prevState.filter((post) => post.id !== id));
    console.log(postsData.length);
  }

  // const postsElement = postsData.map((post) => {
  //   return <Post key={post.id} {...post} />;
  // });

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        <Aside />
        <input
          type="text"
          placeholder="eum et est..."
          value={searchQuery}
          onChange={handleChange}
        />
        {/* {searchQuery.length} */}
        {!searchQuery.length
          ? postsData.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))
          : foundPosts.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))}

        {/* {foundPosts && foundPosts.length > 0 ? (
          foundPosts.map((post) => (
            <Post key={post.id} {...post} onClick={handleClick} />
          ))
        ) : (
          <h2>No posts found</h2>
        )}
        {searchQuery.value} */}
        {/* {postsData.map((post) => (
          <Post key={post.id} {...post} onClick={handleClick} />
        ))} */}
      </StyledContainer>
      <Footer />
    </>
  );
}
