import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
}

export default function Card(props: PropsWithChildren<CardProps>) {
  const { children, title } = props;
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.card_title}>{title}</h3>}
      {children}
    </div>
  );
}
