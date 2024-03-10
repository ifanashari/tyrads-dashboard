import BalanceStatistic from "@/components/BalanceStatistic/BalanceStatistic";
import TransactionList from "@/components/TransactionList/TransactionList";
import React from "react";

export default function Finance() {
  return (
    <>
      <div className="mb-8">
        <h1>Finance</h1>
      </div>
      <div className="grid grid-cols-2 mb-8">
        <div>
          <BalanceStatistic />
        </div>
      </div>
      <TransactionList />
    </>
  );
}
