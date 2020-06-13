import React from "react";

import styles from "./ArticleHeader.module.scss";

const ArticleHeader = ({ children, style }) => {
  return (
    <span className={styles["ArticleHeader"]} style={style}>
      {children}
    </span>
  );
};

export default ArticleHeader;
