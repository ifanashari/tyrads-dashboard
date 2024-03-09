import React, { lazy } from "react";
import styles from "./NavbarPageControl.module.css";
import NavbarControlItem, { PageList } from "../NavbarControlItem/NavbarControlItem";

const IconHome = lazy(() => import("@/components/Icons/IconHome"))
const IconBell = lazy(() => import("@/components/Icons/IconBell"))
const IconClock = lazy(() => import("@/components/Icons/IconClock"))
const IconPeople = lazy(() => import("@/components/Icons/IconPeople"))
const IconWallet = lazy(() => import("@/components/Icons/IconWallet"))
const IconSetting = lazy(() => import("@/components/Icons/IconSetting"))

export default function NavbarPageControl() {
  const pageList: PageList[] = [
    { icon: <IconHome />, url: "/dashboard" },
    { icon: <IconBell />, url: "/notification" },
    { icon: <IconClock />, url: "/dashboard" },
    { icon: <IconPeople />, url: "/dashboard" },
    { icon: <IconWallet />, url: "/transaction" },
    { icon: <IconSetting />, url: "/dashboard" },
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
