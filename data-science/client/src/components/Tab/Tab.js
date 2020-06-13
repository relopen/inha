import React from "react";

import styles from "./Tab.module.scss";

const Tab = ({ current, options, onClick }) => {
  if (!options) {
    return null;
  }

  return (
    <ul className={styles["Tab"]}>
      {options.map((option) => {
        return (
          <li>
            <a
              href="#"
              className={current === option.key ? styles["on"] : ""}
              title={option.title}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onClick) {
                  onClick(option);
                }
              }}
            >
              {option?.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
