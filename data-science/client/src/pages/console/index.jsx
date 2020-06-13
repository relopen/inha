import React from "react";
import { Route } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import AnalyticsPage from "./analytics";

const ConsoleRoute = ({ match }) => {
  return (
    <MainLayout>
      <Route path={`${match.url}/analytics`} component={AnalyticsPage} />
    </MainLayout>
  );
};

export default ConsoleRoute;
