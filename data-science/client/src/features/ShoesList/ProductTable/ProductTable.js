import React from "react";

import Scroll from "../../../components/Scroll";

import Header from "./Header";
import ProductList from "./ProductList";

import styles from "./ProductTable.module.scss";

const ProductTable = () => {
  return (
    <span className={styles["ProductTable"]}>
      <Header />
      <Scroll>
        <ProductList />
      </Scroll>
    </span>
  );
};

export default ProductTable;
