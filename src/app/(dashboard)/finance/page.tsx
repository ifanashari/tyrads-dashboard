import BalanceStatistic from "@/components/BalanceStatistic/BalanceStatistic";
import TransactionList from "@/components/TransactionList/TransactionList";
import React from "react";

export default function Finance() {
  return (
    <>
      <div className="mb-8">
        <h1>Finance</h1>
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
