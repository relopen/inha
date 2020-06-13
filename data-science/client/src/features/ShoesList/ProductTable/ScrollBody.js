import React, { useRef, useEffect, useState } from "react";

import styles from "./ProductTable.module.scss";

const ScrollBody = ({ children, offsetTop }) => {
  const containerRef = useRef();
  const [wrapperHeight, setWrapperHeight] = useState(0);

  useEffect(() => {
    const getWrapperHeight = () => {
      const position = containerRef.current.getBoundingClientRect();
      const height = window.innerHeight - position.top - 10 - (offsetTop || 0);
      setWrapperHeight(height);
    };

    getWrapperHeight();
    window.addEventListener("resize", getWrapperHeight);
    return () => {
      window.removeEventListener("resize", getWrapperHeight);
    };
  }, [offsetTop]);

  return (
    <div ref={containerRef} className={styles["ScrollBody"]}>
      <div className={styles["wrapper"]} style={{ height: wrapperHeight }}>
        <div className={styles["contents"]}>{children}</div>
      </div>
    </div>
  );
};

export default ScrollBody;
