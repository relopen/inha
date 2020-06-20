import React from "react";
import cn from "classnames";

import { ArticleHeader, ArticleSelect } from "../../components/Article";
import Tab from "../../components/Tab";

import styles from "./News.module.scss";

const News = () => {
  return (
    <article>
      <ArticleHeader>
        <ArticleSelect title="최신 뉴스" description="by hypebeast.kr" />
      </ArticleHeader>
      <div>뉴스정보</div>
    </article>
  );
};

export default News;
