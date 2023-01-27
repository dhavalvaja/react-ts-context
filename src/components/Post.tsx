import { useContext } from "react";
import PostI from "../Post";
import RouteContext from "../RouteContext";

interface PostProp {
  post: PostI;
}
const Post = (props: PostProp) => {
  const { post } = props;
  const { mode, setRouteName } = useContext(RouteContext);

  function goToProfile() {
    setRouteName("profile");
  }

  return (
    <div
      className="card text-center p-3 m-3 shadow-sm"
      style={{ width: "17rem" }}
    >
      <h1 className="display-6">{post.title}</h1>
      <p>{post.content}</p>
      <button className="btn btn-primary m-auto" onClick={goToProfile}>
        Profile
      </button>
    </div>
  );
};

export default Post;
