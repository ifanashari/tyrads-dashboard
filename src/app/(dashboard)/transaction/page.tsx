import TransactionList from "@/components/TransactionList/TransactionList";
import React from "react";

export default function Transaction() {
  return (
    <>
      <div className="mb-8">
        <h1>Transactions</h1>
      </div>
      <TransactionList />
    </>
  );
}
