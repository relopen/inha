import React, { useRef, useEffect, useState } from "react";

import styles from "./Scroll.module.scss";

const Scroll = ({ children, height, offsetTop }) => {
  const containerRef = useRef();
  const [wrapperHeight, setWrapperHeight] = useState(0);

  useEffect(() => {
    const getWrapperHeight = () => {
      const position = containerRef.current.getBoundingClientRect();
      const h = height
        ? height
        : window.innerHeight - position.top - 10 - (offsetTop || 0);
      setWrapperHeight(h);
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

export default Scroll;
