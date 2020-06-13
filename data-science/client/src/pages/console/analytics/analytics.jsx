import React from "react";

import Quote from "../../../features/Quote";
import Infomation from "../../../features/Infomation";
import News from "../../../features/News";
import ShoesList from "../../../features/ShoesList/ShoesList";

import styles from "./analytics.module.scss";

const AnalyticsPage = () => {
  return (
    <>
      <section className={styles["Section--left"]}>
        <Quote />
        <Infomation />
        <News />
      </section>
      <section className={styles["Section--right"]}>
        <ShoesList />
      </section>
    </>
  );
};

export default AnalyticsPage;
