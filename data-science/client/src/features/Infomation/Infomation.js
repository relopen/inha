import React from "react";
import cn from "classnames";

import { ArticleHeader, ArticleSelect } from "../../components/Article";
import Tab from "../../components/Tab";

import styles from "./Infomation.module.scss";

const Infomation = () => {
  return (
    <article>
      <ArticleHeader>
        <ArticleSelect title="상세 정보" description="스타일 코드" />
        <div className={styles["Article_Header_Tab"]}>
          <Tab
            current="info"
            options={[
              { key: "tx", title: "시세" },
              { key: "info", title: "정보" },
            ]}
            onClick={(option) => console.log(option)}
          />
        </div>
      </ArticleHeader>
      <div>설명합시당~</div>
    </article>
  );
};

export default Infomation;
