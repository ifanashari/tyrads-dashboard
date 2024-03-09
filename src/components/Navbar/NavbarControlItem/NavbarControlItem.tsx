import React from "react";
import styles from "./NavbarControlItem.module.css";
import classNames from "classnames";

export interface PageList {
  icon: React.JSX.Element;
  url: string;
  isPageControl?: boolean;
}

export default function NavbarControlItem({
  icon,
  url,
  isPageControl,
}: PageList) {
  return (
    <div
      className={classNames(
        styles.controlItem_item,
        isPageControl && styles.controlItem_pageItem
      )}
      id={url}
    >
      {icon}
    </div>
  );
}
