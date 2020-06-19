import React from "react";
import cn from "classnames";

import { useSelector } from "react-redux";

import { numberWithCommas } from "../../utils";

import styles from "./Market.module.scss";

const Market = () => {
  const state = useSelector((state) => state.shoes.shoes);

  const market = state?.marketInfo;
  const currency = state?.model?.currency?.toUpperCase();

  return (
    <span className={styles["market"]}>
      <div className={cn(styles["left"], styles["current"])}>
        <span className={styles["first"]}>
          <strong>{numberWithCommas(market?.currentPrice)}</strong>
          <em>{currency}</em>
        </span>
        <span>
          <p className={styles["tit"]}>국밥몇개?</p>
          <strong>{Math.floor((market?.currentPrice || 0) / 7000)}개</strong>
        </span>
      </div>

      <div className={cn(styles["right"], styles["history"])}>
        <dl className={styles["first"]}>
          <dt>고가</dt>
          <dd>
            <strong className="up">{numberWithCommas(market?.maxPrice)}</strong>
          </dd>
          <dt>저가</dt>
          <dd>
            <strong className="down">
              {numberWithCommas(market?.minPrice)}
            </strong>
          </dd>
        </dl>
        <dl>
          <dt>거래량</dt>
          <dd>
            <strong>{numberWithCommas(market?.volume)}</strong>&nbsp;<i>PAIR</i>
          </dd>
          <dt>거래대금</dt>
          <dd>
            <strong>{numberWithCommas(market?.transaction)}</strong>&nbsp;
            <i>{currency}</i>
          </dd>
        </dl>
      </div>
    </span>
  );
};

export default Market;
