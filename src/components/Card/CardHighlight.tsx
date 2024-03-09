import React, { PropsWithChildren } from "react";
import styles from "./CardHighlight.module.css";

interface CardHighlight {
  title: string;
}

export default function CardHighlight(props: PropsWithChildren<CardHighlight>) {
  const { children, title } = props;
  return (
    <div className={styles.cardHighlight}>
      <h3 className={styles.cardHighlight_title}>{title || "-"}</h3>
      {children}
    </div>
  );
}
