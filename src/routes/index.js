import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/main";
import Card from "../pages/card";
import postDetail from "../pages/postDetail";

const RouteHandle = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Main} />
      <Route exact strict path="/card" component={Card} />
      <Route exact strict path="/postDetail" component={postDetail} />
    </Switch>
  );
};

export default RouteHandle;
