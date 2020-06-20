import React, { useRef } from "react";

import styles from "./Search.module.scss";

const Search = ({ value, onChange, onClear }) => {
  const inputRef = useRef();

  return (
    <div className={styles["Search"]}>
      <input
        ref={inputRef}
        type="text"
        placeholder="신발 이름 / 키워드"
        value={value}
        onChange={onChange}
      />
      {value && (
        <a
          href="#"
          className={styles["btn-clear"]}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onClear) {
              onClear();
            }
          }}
        >
          X
        </a>
      )}
      <a
        href="#"
        className={styles["btn-search"]}
        title="검색"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        검색
      </a>
    </div>
  );
};

export default Search;
