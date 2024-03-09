import React from "react";
import styles from "./NavbarControlItem.module.css";
import classNames from "classnames";
import Link from "next/link";

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
    <Link
      href={url}
      className={classNames(
        styles.controlItem_item,
        isPageControl && styles.controlItem_pageItem
      )}
    >
      {icon}
    </Link>
  );
}
