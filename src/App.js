import {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import NoPostContainer from "./components/NoPostContainer";
import Post from "./components/Post";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
// import InfiniteScroll from "react-infinite-scroll-component";

const StyledContainer = styled.main`
  max-width: 600px;
  margin: 0 auto;
  background: fff;
  padding: 1em;
  position: relative;
  min-height: 100vh;

  @media (min-width: 700px) {
    padding: 2em 1em;
  }
`;

export default function App() {
  const [isLoading, setIsloading] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPosts, setFoundPosts] = useState([]);
  const mainRef = useRef(null);

//test for infinite scroll
// const [items, setItems] = useState([])

  useEffect(() => {
    setIsloading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
        setFoundPosts(data);
        setIsloading(false);
      });
  },[]);

  // function getData() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
        // setPostsData(prevData => {
        //   return prevData
        // })

    
      // setItems(prevData => {
      //   return [...prevData.concat(prevData.slice(10, 20))]
      // })

        // setFoundPosts(data);
        // setIsloading(false);
      // }
      // );
  // }

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

  function addPost({title, body}) {
    if (title !== "" && body !== "") {
      setPostsData((prevPosts) => [
        ...prevPosts,
        {userId: "", id: prevPosts[prevPosts.length - 1].id + 1, title, body},
      ]);
      alert("Your new post was added at the bottom.");
    } else {
      alert("Please fill out all inputs!");
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
        {isLoading && <LoadingSpinner />}
        {searchQuery && !foundPosts.length && <NoPostContainer />}
        {!searchQuery.length
          ? postsData.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))
          : foundPosts.map((post) => (
              <Post key={post.id} {...post} onClick={handleClick} />
            ))}

        {/* <InfiniteScroll
          dataLength={postsData.length} //This is important field to render the next data
          next={getData}
          hasMore={true}
          loader={<p>loading...</p>}
          endMessage={
            <p style={{textAlign: "center"}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {isLoading && <LoadingSpinner />}
          {searchQuery && !foundPosts.length && <NoPostContainer />}
          {!searchQuery.length
            ? items.map((post) => (
                <Post key={post.id} {...post} onClick={handleClick} />
              ))
            : foundPosts.map((post) => (
                <Post key={post.id} {...post} onClick={handleClick} />
              ))}
        </InfiniteScroll> */}
      </StyledContainer>
      <Footer />
    </>
  );
}
