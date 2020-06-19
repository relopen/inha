import React from "react";
import { useSelector, useDispatch } from "react-redux";

import EmptyText from "./EmptyText";

import styles from "./ProductTable.module.scss";
import { actions } from "../../../store/modules";

const ProductList = () => {
  const dispatch = useDispatch();

  const { shoeses, selected } = useSelector((state) => {
    const filterText = state.shoeses.filterText;
    let returnShoeses = state.shoeses.shoeses;
    if (state.shoeses.filterText) {
      const regex = new RegExp(filterText, "gi");
      returnShoeses = returnShoeses?.filter((data) => {
        return data.name.search(regex) > -1 || data.keywords.search(regex) > -1;
      });
    }
    return {
      shoeses: returnShoeses,
      selected: state.shoes.shoes,
    };
  });

  const select = (shoes) => {
    dispatch(actions.shoes.fetchShoes(shoes));
  };

  if (false) {
    return <EmptyText />;
  }

  return (
    <table>
      <colgroup>
        <col width="64" />
        <col width="128" />
        <col width="108" />
        <col width="*" />
      </colgroup>
      <tbody>
        {shoeses?.map((row) => {
          return (
            <tr>
              <td>
                <span className={styles["thumb"]}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      select(row);
                    }}
                  >
                    <img src={row.thumbnail} />
                  </a>
                </span>
              </td>
              <td className={styles["tit"]}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    select(row);
                  }}
                >
                  <strong>{row.name}</strong>
                  <em>{row.styleCode}</em>
                </a>
              </td>
              <td className={styles["price"]}>
                <p>
                  <strong>{row.formatMinAskPrice}</strong>
                  <i>{row.currency.toUpperCase()}</i>
                </p>
              </td>
              <td className={styles["rAlign"]}>
                <p>
                  <strong>{row.formatMaxBidPrice}</strong>
                  <i>{row.currency.toUpperCase()}</i>
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
