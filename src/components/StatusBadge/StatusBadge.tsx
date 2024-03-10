import React from "react";
import classNames from "classnames";
import styles from "./StatusBadge.module.css";

export enum NotificationStatus {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILED = "FAILED",
}

export default function StatusBadge({status}: {status: NotificationStatus | null}) {
  return (
    <div className={classNames(styles.statusBadge, styles[status || NotificationStatus.SUCCESS])}>
        {status}
    </div>
  );
}
