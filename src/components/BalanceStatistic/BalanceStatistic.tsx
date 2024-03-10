"use client";

import React from "react";
import styles from "./BalanceStatistic.module.css";
import Card from "../Card/Card";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { DoughnutChartOption } from "@/constant/ChartConstant";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function BalanceStatistic() {
  const dataBalance = {
    datasets: [
      {
        data: [10, 20],
        borderWidth: 4,
        backgroundColor: ["#cac7f7", "#525de4"],
      },
    ],
  };

  const dataBalanceList = dataBalance.datasets[0].data;

  const balanceRation = (dataBalanceList[0] / dataBalanceList[1]) * 100;

  return (
    <Card title="Income and Expense ratio" isFitContent>
      <div className={styles.balanceStatistic_wrapper}>
        <Doughnut data={dataBalance} options={DoughnutChartOption} />
        <span className={styles.balanceStatistic_ratio}>{balanceRation}%</span>
      </div>
    </Card>
  );
}
