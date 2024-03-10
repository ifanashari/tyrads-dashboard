import React from "react";
import styles from "./NotificationList.module.css";
import IconInvoice from "../Icons/IconInvoice";
import Card from "../Card/Card";
import IconBell from "../Icons/IconBell";
import classNames from "classnames";
import { formatDate } from "@/utils/textUtils";
import StatusBadge, { NotificationStatus } from "../StatusBadge/StatusBadge";

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

interface NotificationListProps {
  isTitleActive?: boolean;
  notificationLimit?: number;
}

export default function NotificationList({
  isTitleActive,
  notificationLimit
}: NotificationListProps) {
  const notificationList: NotificationList[] = [
    {
      status: NotificationStatus.SUCCESS,
      message: "Invoice",
      dateReceived: new Date().toString(),
      type: NotificationType.INVOICE,
    },
    {
      status: NotificationStatus.SUCCESS,
      message: "Message from Eric",
      dateReceived: new Date().toString(),
      type: NotificationType.OTHER,
    },
    {
      status: NotificationStatus.PENDING,
      message: "Invoice",
      dateReceived: new Date().toString(),
      type: NotificationType.INVOICE,
    },
    {
      status: NotificationStatus.SUCCESS,
      message: "Message from Eric",
      dateReceived: new Date().toString(),
      type: NotificationType.OTHER,
    },
    {
      status: NotificationStatus.FAILED,
      message: "Invoice",
      dateReceived: new Date().toString(),
      type: NotificationType.INVOICE,
    },
  ];

  const isInvoiceNotification = (value: NotificationType) => {
    return value === NotificationType.INVOICE;
  };

  const calculateNotificationLimit = notificationLimit ? notificationLimit : notificationList.length

  return (
    <Card title={isTitleActive ? "Notifications" : undefined}>
      {notificationList.map(
        (notification: NotificationList, notificationIndex) => {
          if (notificationIndex >= calculateNotificationLimit) return
          return (
            <div
              className={classNames(styles.notificationItem, "py-5")}
              key={`notification-item-${notificationIndex}`}
            >
              <div className={styles.notificationItem_media}>
                {isInvoiceNotification(notification.type) ? (
                  <IconInvoice />
                ) : (
                  <IconBell />
                )}
              </div>
              <div className="ml-6 flex">
                <h4 className={styles.notificationItem_title}>
                  {notification.message}
                </h4>
                {isInvoiceNotification(notification.type) && (
                  <StatusBadge status={notification.status || NotificationStatus.SUCCESS} />
                )}
              </div>
              <span className={styles.notificationItem_date}>
                {formatDate(notification.dateReceived)}
              </span>
            </div>
          );
        }
      )}
    </Card>
  );
}
