import React from "react";

import styles from "./ShoesList.module.scss";
import { ArticleHeader } from "../../components/Article";
import Search from "../../components/Search/Search";
import ProductTable from "./ProductTable";

const ShoesList = () => {
  return (
    <article>
      <ArticleHeader style={{ padding: 0 }}>
        <Search value="asd" />
      </ArticleHeader>
      <div>
        <ProductTable />
      </div>
    </article>
  );
};

export default ShoesList;
