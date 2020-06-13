import React from "react";
import cn from "classnames";

import styles from "./MainLayout.module.scss";
import "./theme.scss";

const MainLayout = ({ children }) => {
  return <div className={cn(styles["Container"])}>{children}</div>;
};

export default MainLayout;
