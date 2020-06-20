import React, { useEffect } from "react";
import cn from "classnames";

import { ArticleHeader, ArticleSelect } from "../../components/Article";
import Tab from "../../components/Tab";
import Scroll from "../../components/Scroll";

import { actions } from "../../store/modules";

import styles from "./News.module.scss";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.news.news);

  useEffect(() => {
    if (!state || state.length === 0) {
      dispatch(actions.news.fetchNews());
    }
  }, []);

  return (
    <article>
      <ArticleHeader>
        <ArticleSelect title="최신 뉴스" description="by hypebeast.kr" />
      </ArticleHeader>
      <Scroll height={571}>
        <div className={styles["Body"]}>
          <div className={styles["News"]}>
            {state?.map((news) => {
              console.log(news);
              return (
                <>
                  <div className={styles["NewsContainer"]}>
                    <div className={styles["ImageContainer"]}>
                      <a href={news.path} target="_blank">
                        <img src={news.img} />
                      </a>
                    </div>
                    <div className={styles["ContentContainer"]}>
                      <div className={styles["Category"]}>
                        <a href={news.path} target="_blank">
                          신발
                        </a>
                      </div>
                      <div className={styles["Title"]}>
                        <a href={news.path} target="_blank">
                          <h2>
                            <span>{news.title}</span>
                          </h2>
                        </a>
                      </div>
                      <div className={styles["Desc"]}>{news.desc}</div>
                      <div className={styles["Time"]}>
                        <span>{news.time}</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </Scroll>
    </article>
  );
};

export default News;
