import React from "react";

import Header from "./Header";
import ScrollBody from "./ScrollBody";
import ProductList from "./ProductList";

import styles from "./ProductTable.module.scss";

const ProductTable = () => {
  return (
    <span className={styles["ProductTable"]}>
      <Header />
      <ScrollBody>
        <ProductList />
      </ScrollBody>
    </span>
  );
};

export default ProductTable;
