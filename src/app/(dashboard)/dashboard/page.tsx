import BalanceStatistic from "@/components/BalanceStatistic/BalanceStatistic";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import NotificationList from "@/components/NotificationList/NotificationList";
import TransactionList from "@/components/TransactionList/TransactionList";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1>Hello, Ivushkin</h1>
        <p>View and control your finances here !</p>
      </div>
      <div className="grid grid-cols-2 mb-8">
        <NotificationList isTitleActive notificationLimit={2} />
        <CreditCardPreview />
      </div>
      <div className="grid grid-cols-3 mb-8">
        <div className="col-span-2">
          <TransactionList />
        </div>
        <BalanceStatistic />
      </div>
    </>
  );
}
