import React from "react";
import cn from "classnames";

import { ArticleHeader, ArticleSelect } from "../../components/Article";
import Tab from "../../components/Tab";

import Market from "../Market/Market";
import Chart from "../Chart/Chart";

import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <article>
      <ArticleHeader>
        <ArticleSelect title="조던 오프화이트" description="260" arrow />
        <div className={styles["Article_Header_Tab"]}>
          <Tab
            current="tx"
            options={[
              { key: "tx", title: "시세" },
              { key: "info", title: "정보" },
            ]}
            onClick={(option) => console.log(option)}
          />
        </div>
      </ArticleHeader>
      <div>
        <Market />
        <Chart />
      </div>
    </article>
  );
};

export default Quote;
