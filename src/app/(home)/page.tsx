import React from "react";
import styles from "./Home.module.css";
import Button, { ButtonType } from "@/components/Button/Button";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home}>
        <h1>This is TyrAds application test</h1>
        <p className="mb-6">by Ifan Ashari</p>
        <Link href="/dashboard">
          <Button type={ButtonType.PRIMARY}>Go to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
