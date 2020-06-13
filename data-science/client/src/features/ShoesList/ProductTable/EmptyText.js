import React from "react";

import styles from "./ProductTable.module.scss";

const EmptyText = () => {
  return (
    <div className={styles["EmptyText"]}>
      <i>검색된 상품이 없습니다.</i>
    </div>
  );
};

export default EmptyText;
