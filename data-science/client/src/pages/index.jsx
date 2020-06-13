import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const IndexPage = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace("/console/analytics");
  }, []);
  return null;
};

export default IndexPage;
