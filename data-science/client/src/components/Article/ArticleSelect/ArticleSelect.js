import React from "react";

import style from "./ArticleSelect.module.scss";

const ArticleSelect = ({ title, description, arrow, onClick }) => {
  return (
    <div className={style["select-container"]}>
      <a
        href="#"
        className={style["select"]}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </a>
      {arrow && (
        <a
          href="#"
          className={style["arrow"]}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        ></a>
      )}
    </div>
  );
};

export default ArticleSelect;
