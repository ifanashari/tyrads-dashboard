import React from "react";
import styles from "./NotificationList.module.css";
import IconInvoice from "../Icons/IconInvoice";
import Card from "../Card/Card";
import IconBell from "../Icons/IconBell";
import classNames from "classnames";

enum NotificationStatus {
  "SUCCESS",
  "PENDING",
  "FAILED",
}
enum NotificationType {
  "INVOICE",
  "OTHER",
}

interface NotificationList {
  status: NotificationStatus | null;
  message: string;
  dateReceived: string;
  type: NotificationType;
}

export default function NotificationList() {
  const notificationList: NotificationList[] = [
    {
      status: NotificationStatus.SUCCESS,
      message: "Invoice",
      dateReceived: "asd",
      type: NotificationType.INVOICE,
    },
    {
      status: NotificationStatus.SUCCESS,
      message: "Message from Eric",
      dateReceived: "asd",
      type: NotificationType.OTHER,
    },
  ];

  const StatusBadge = ({ status }: { status: NotificationStatus | null }) => {
    return <div>{status}</div>;
  };

  return (
    <Card>
      {notificationList.map(
        (notification: NotificationList, notificationIndex) => {
          return (
            <div
              className={classNames(
                styles.notificationItem,
                "py-5")}
              key={`notification-item-${notificationIndex}`}
            >
              <div className={styles.notificationItem_media}>
                {notification.type === NotificationType.INVOICE ? (
                  <IconInvoice />
                ) : (
                  <IconBell />
                )}
              </div>
              <div className="ml-6">
                <h4 className={styles.notificationItem_title}>
                  {notification.message}
                </h4>
                <StatusBadge status={notification.status} />
              </div>
              <span className={styles.notificationItem_date}>
                {notification.dateReceived}
              </span>
            </div>
          );
        }
      )}
    </Card>
  );
}
