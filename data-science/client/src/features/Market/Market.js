import React from "react";
import cn from "classnames";

import styles from "./Market.module.scss";

const Market = () => {
  return (
    <span className={styles["market"]}>
      <div className={cn(styles["left"], styles["current"])}>
        <span className={styles["first"]}>
          <strong>11,378,000</strong>
          <em>KRW</em>
        </span>
        <span>
          <p className={styles["tit"]}>국밥몇개?</p>
          <strong>300개</strong>
        </span>
      </div>

      <div className={cn(styles["right"], styles["history"])}>
        <dl className={styles["first"]}>
          <dt>고가</dt>
          <dd>
            <strong className="up">11,406,000</strong>
          </dd>
          <dt>저가</dt>
          <dd>
            <strong className="down">11,304,000</strong>
          </dd>
        </dl>
        <dl>
          <dt>거래량(24H)</dt>
          <dd>
            <strong>1,735.304</strong>&nbsp;<i>PAIR</i>
          </dd>
          <dt>거래대금(24H)</dt>
          <dd>
            <strong>19,709,554,782</strong>&nbsp;
            <i>KRW</i>
          </dd>
        </dl>
      </div>
    </span>
  );
};

export default Market;
