import { useContext } from "react";
import RouteContext, { Color } from "../RouteContext";

const Profile = () => {
  const { mode, setRouteName } = useContext(RouteContext);
console.log(Color[mode]);

  function goToHome() {
    setRouteName("home");
  }

  return (
    <div className={`bg-${Color[mode]}`}>
      <button className="btn btn-secondary" onClick={goToHome}>
        Home
      </button>
      <p className={`display-1 text-${Cmode}`}>Profile</p>
    </div>
  );
};

export default Profile;
