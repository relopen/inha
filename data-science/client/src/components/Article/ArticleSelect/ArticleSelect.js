import React, { useRef } from "react";

import style from "./ArticleSelect.module.scss";

const sizes = [];
for (let i = 255; i <= 300; i += 5) {
  sizes.push(i);
}

const ArticleSelect = ({
  thumb,
  title,
  description,
  shoesSize,
  arrow,
  onClick,
  onChange,
}) => {
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
        {shoesSize && (
          <select
            value={shoesSize}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
            }}
          >
            {sizes.map((size) => {
              return (
                <option key={`select-size-${size}`} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        )}
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
