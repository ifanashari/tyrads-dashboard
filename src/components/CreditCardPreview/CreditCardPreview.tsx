import React from "react";
import styles from "./CreditCardPreview.module.css";

export default function CreditCardPreview() {
  return (
    <img className={styles.creaditCard_media} src="/images/credit-card.jpg" alt="credit-card" />
  );
}
