import React, { useState } from "react";
import RouteContext, { Color } from "../RouteContext";

interface RoutePropInterface {
  children: React.ReactElement;
}

const RouterComponent = (props: RoutePropInterface) => {
  const [routeName, setRouteName] = useState("home");
  const [mode, setMode] = useState(Color.dark);
  return (
    <RouteContext.Provider
      value={{
        routeName: routeName,
        setRouteName: setRouteName,
        mode,
        setMode,
      }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouterComponent;
