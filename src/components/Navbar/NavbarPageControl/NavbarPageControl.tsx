import React, { lazy } from "react";
import styles from "./NavbarPageControl.module.css";
import NavbarControlItem, { PageList } from "../NavbarControlItem/NavbarControlItem";

const IconHome = lazy(() => import("@/components/Icons/IconHome"))

export default function NavbarPageControl() {
  const pageList: PageList[] = [
    { icon: <IconHome />, url: "a" },
    { icon: <IconHome />, url: "b" },
    { icon: <IconHome />, url: "c" },
    { icon: <IconHome />, url: "x" },
    { icon: <IconHome />, url: "c" },
    { icon: <IconHome />, url: "as" },
];

  return (
    <div className={styles.pageControl_wrapper}>
      {pageList.map((page: PageList, pageIndex) => {
        return (
          <NavbarControlItem key={`page-control-${pageIndex}`} {...page} isPageControl />
        );
      })}
    </div>
  );
}
