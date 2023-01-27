import { useContext } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RouteContext from "./RouteContext";

function App() {
  // const [routeName, setRouteName] = useState("home");

  const { routeName } = useContext(RouteContext);
  switch (routeName) {
    case "home":
      return <Home />;
    case "profile":
      return <Profile />;
    default:
      return <div>Page Not Found...</div>;
  }
}

export default App;
