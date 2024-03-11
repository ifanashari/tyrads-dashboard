import React from "react";
import styles from "./Highlight.module.css";
import CardHighlight from "../Card/CardHighlight";
import ExpenseAndInvoice from "../ExpenseAndInvoice/ExpenseAndInvoice";
import Premium from "../Premium/Premium";

export default function Highlight() {
  return (
    <div className={styles.highlightSection}>
      <div className="mb-5">
        <ExpenseAndInvoice />
      </div>
      <Premium />
    </div>
  );
}
