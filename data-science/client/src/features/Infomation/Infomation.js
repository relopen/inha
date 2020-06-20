import React from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { ArticleHeader, ArticleSelect } from "../../components/Article";
import Tab from "../../components/Tab";
import Scroll from "../../components/Scroll";
import { numberWithCommas } from "../../utils";

import styles from "./Infomation.module.scss";

const Infomation = () => {
  const state = useSelector((state) => state.shoes.shoes);

  return (
    <article>
      <ArticleHeader>
        <ArticleSelect title="상세 정보" />
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
      <Scroll height={572}>
        <div className={styles["Body"]}>
          <div className={styles["Title"]}>
            {state?.model.name || "Untitled"}

            {state?.model && (
              <div className={styles["Links"]}>
                <a
                  href={`https://stockx.com/search?s=${state?.model.styleCode}`}
                  target="_blank"
                >
                  Stockx 검색
                </a>
              </div>
            )}
          </div>

          <div className={styles["TableLayout"]}>
            <table>
              <colgroup>
                <col width="100px" />
                <col />
                <col width="100px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>출시일</th>
                  <td>{state?.model.launchingDate}</td>
                  <th>스타일코드</th>
                  <td>{state?.model.styleCode}</td>
                </tr>
                <tr>
                  <th>출시 가격</th>
                  <td>
                    {numberWithCommas(state?.model.originalPrice)}{" "}
                    {state?.model.currenct?.toUpperCase()}
                  </td>
                  <th>색상</th>
                  <td>{state?.model.color}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles["Title"]}>신발소개</div>
          <div className={styles["Desc"]}>
            <div className={styles["Image"]}>
              <img src={state?.model.thumbnail} />
            </div>
            <div className={styles["Text"]}>
              <p>{state?.model.description || "설명이 등록되지 않았습니다."}</p>
            </div>
          </div>
        </div>
      </Scroll>
    </article>
  );
};

export default Infomation;
