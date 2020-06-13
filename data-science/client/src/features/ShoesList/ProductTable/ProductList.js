import React from "react";

import EmptyText from "./EmptyText";

import styles from "./ProductTable.module.scss";

const ProductList = () => {
  if (false) {
    return <EmptyText />;
  }

  return (
    <table>
      <colgroup>
        <col width="64" />
        <col width="148" />
        <col width="98" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr className="on">
          <td>
            <span className={styles["thumb"]}>
              <a href="#">
                <img src="https://xxblue.com/wp-content/uploads/2020/02/Converse-Run-Star-Hike-Hi-JW-Anderson-Black.jpg" />
              </a>
            </span>
          </td>
          <td className={styles["tit"]}>
            <a href="#">
              <strong>쎄타퓨엘</strong>
              <em>TFUEL</em>
            </a>
          </td>
          <td className={styles["price"]}>
            <p>
              <strong>13.40</strong>
              <i>KRW</i>
            </p>
          </td>
          <td className={styles["rAlign"]}>
            <p>
              37,767<i>백만</i>
            </p>
          </td>
        </tr>
        <tr className="on">
          <td>
            <span className={styles["thumb"]}>
              <a href="#">
                <img src="https://xxblue.com/wp-content/uploads/2020/02/Converse-Run-Star-Hike-Hi-JW-Anderson-Black.jpg" />
              </a>
            </span>
          </td>
          <td className={styles["tit"]}>
            <a href="#">
              <strong>쎄타퓨엘</strong>
              <em>TFUEL</em>
            </a>
          </td>
          <td className={styles["price"]}>
            <p>
              <strong>13.40</strong>
              <i>KRW</i>
            </p>
          </td>
          <td className={styles["rAlign"]}>
            <p>
              37,767<i>백만</i>
            </p>
          </td>
        </tr>

        <tr className="on">
          <td>
            <span className={styles["thumb"]}>
              <a href="#">
                <img src="https://xxblue.com/wp-content/uploads/2020/02/Converse-Run-Star-Hike-Hi-JW-Anderson-Black.jpg" />
              </a>
            </span>
          </td>
          <td className={styles["tit"]}>
            <a href="#">
              <strong>쎄타퓨엘</strong>
              <em>TFUEL</em>
            </a>
          </td>
          <td className={styles["price"]}>
            <p>
              <strong>13.40</strong>
              <i>KRW</i>
            </p>
          </td>
          <td className={styles["rAlign"]}>
            <p>
              37,767<i>백만</i>
            </p>
          </td>
        </tr>

        <tr className="on">
          <td>
            <span className={styles["thumb"]}>
              <a href="#">
                <img src="https://xxblue.com/wp-content/uploads/2020/02/Converse-Run-Star-Hike-Hi-JW-Anderson-Black.jpg" />
              </a>
            </span>
          </td>
          <td className={styles["tit"]}>
            <a href="#">
              <strong>쎄타퓨엘</strong>
              <em>TFUEL</em>
            </a>
          </td>
          <td className={styles["price"]}>
            <p>
              <strong>13.40</strong>
              <i>KRW</i>
            </p>
          </td>
          <td className={styles["rAlign"]}>
            <p>
              37,767<i>백만</i>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductList;
