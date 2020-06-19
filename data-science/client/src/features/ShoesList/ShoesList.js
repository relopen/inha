import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../store/modules";

import { ArticleHeader } from "../../components/Article";
import Search from "../../components/Search/Search";

import ProductTable from "./ProductTable";

import styles from "./ShoesList.module.scss";

const ShoesList = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.shoeses.filterText);

  const setFilterText = (text: string) => {
    dispatch(actions.shoeses.setFilterText(text));
  };

  useEffect(() => {
    dispatch(actions.shoeses.fetchShoeses());
  }, []);

  return (
    <article>
      <ArticleHeader style={{ padding: 0 }}>
        <Search
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          onClear={() => {
            setFilterText("");
          }}
        />
      </ArticleHeader>
      <div>
        <ProductTable />
      </div>
    </article>
  );
};

export default ShoesList;
