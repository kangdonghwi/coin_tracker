import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfig/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `가격`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174,385,194,0.5)",
              borderColor: "rgba(174,305,194,0.4)",
              pointRadius: 0,
            },
          ],
        },
        options: { ...historyOptions },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">{detail.current_price}원</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250} />
      </div>
      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
