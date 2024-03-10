import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";
import classNames from "classnames";

interface CardProps {
  title?: string;
  isFitContent?: boolean;
}

export default function Card(props: PropsWithChildren<CardProps>) {
  const { children, title, isFitContent } = props;
  return (
    <div className={classNames(
      styles.card,
      isFitContent ? styles.card_fitContent : styles.card_default
    )}>
      {title && <h3 className={styles.card_title}>{title}</h3>}
      {children}
    </div>
  );
}
