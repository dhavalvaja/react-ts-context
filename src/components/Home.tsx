import React, { useContext, useState } from "react";
import PostI from "../Post";
import RouteContext from "../RouteContext";
import Post from "./Post";

const tempPosts: PostI[] = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" },
];

const Home = () => {
  const [posts] = useState<PostI[]>(tempPosts);
  // const [isLoading, setIsLoading] = useState(true);
  const {routeName,setRouteName} = useContext(RouteContext)


  return (
    <>
      <div className="d-flex flex-wrap shadow my-3">
        {posts.length > 0 ? (
          posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Home;
