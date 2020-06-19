import React from "react";

import style from "./ArticleSelect.module.scss";

const ArticleSelect = ({ thumb, title, description, arrow, onClick }) => {
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
        {thumb && (
          <em>
            <img width={26} height={26} src={thumb} alt={thumb} />
          </em>
        )}
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
