import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  DANGER = "DANDER",
}

interface ButtonProps {
  type: ButtonType;
  full?: boolean;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, type, full } = props;
  return (
    <button type="button" className={classNames(styles[type], styles.button, full && "w-full")}>
      {children}
    </button>
  );
}
