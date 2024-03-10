import React from "react";
import styles from "./ExpenseAndInvoice.module.css";
import CardHighlight from "../Card/CardHighlight";
import { formatUSD, getPercentage } from "@/utils/textUtils";
import classNames from "classnames";

export default function ExpenseAndInvoice() {
  const income = 2320;
  const expense = 5653;
  const sumOfIncomeAndExpense = income + expense;
  return (
    <CardHighlight title="Expense and invoice">
      <div className={classNames("mb-3", styles.expenseIncomeCard)}>
        <div>
          <h4>Expense</h4>
          <h2>{getPercentage(expense, sumOfIncomeAndExpense)}%</h2>
          <span>{formatUSD(expense)}</span>
        </div>
        <div>
          <div className={styles.expenseIncomeCard_devider}>
            <span>vs</span>
          </div>
        </div>
        <div className="text-right">
          <h4>Income</h4>
          <h2>{getPercentage(income, sumOfIncomeAndExpense)}%</h2>
          <span>{formatUSD(income)}</span>
        </div>
      </div>
      <div className={styles.expenseIncomeCard_barPersentage}>
        <div
          className={styles.expenseIncomeCard_barPersentage_progress}
          style={{ width: `${getPercentage(expense, sumOfIncomeAndExpense)}%` }}
        />
      </div>
    </CardHighlight>
  );
}
