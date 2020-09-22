import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/main";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Main} />
    </Switch>
  );
};

export default RouteHandle;
