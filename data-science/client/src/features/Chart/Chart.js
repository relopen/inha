import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.scss";

const Chart = () => {
  const [state, setState] = useState({ xlabels: [], dataset: [] });
  const marketInfo = useSelector((state) => state.shoes.shoes?.marketInfo);
  useEffect(() => {
    setData();
  }, [marketInfo]);

  function setData() {
    const xlabels = [];
    const dataset = [];

    const all = [
      ...(marketInfo?.domestic || []),
      ...(marketInfo?.pzn || []),
      ...(marketInfo?.stx || []),
    ].sort(
      (a, b) => new Date(a.tx_date).getTime() - new Date(b.tx_date).getTime()
    );

    all.forEach((market) => {
      xlabels.push(market.tx_date.slice(0, 10));
      dataset.push(market.price);
    });

    setState({
      xlabels,
      dataset,
    });

    console.log(xlabels);
    console.log(dataset);

    // xlabels.reverse();
    // dataset.reverse();
  }
  return (
    <span className={styles["chart"]}>
      <Line
        options={{
          legend: {
            display: false,
          },
        }}
        data={(canvas) => {
          canvas.style.height = "451px";
          return {
            labels: state.xlabels,
            datasets: [
              {
                data: state.dataset,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
            ],
          };
        }}
      />
    </span>
  );
};

export default Chart;
