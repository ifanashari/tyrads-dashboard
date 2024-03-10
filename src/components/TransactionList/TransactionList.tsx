import React from "react";
import Card from "../Card/Card";
import { formatUSD } from "@/utils/textUtils";
import styles from "./TransactionList.module.css";
import classNames from "classnames";

interface TransactionList {
  description: string;
  type: string;
  amount: number;
  status: string;
}

export default function TransactionList() {
  const transactionList: TransactionList[] = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
    {
      description: "Quibusdam, ea corporis.",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
    {
      description: "Delectus perspiciatis",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
    {
      description: "veniam fuga optio,",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
    {
      description: "in maiores corrupti neque quidem quas dicta nobis.",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
    {
      description: "Facilis, illo. Facilis sit iste ut!",
      type: "Transaction",
      amount: 10000,
      status: "paid",
    },
  ];

  return (
    <Card title="Transaction">
      <div className={classNames("overflow-x-scroll", styles.no_scrollbar)}>
      <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
        <thead className="border-b border-borderStroke font-medium dark:border-white/10">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Type
            </th>
            <th scope="col" className="px-6 py-4">
              Amount
            </th>
            <th scope="col" className="px-6 py-4">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction: TransactionList, transactionIndex) => {
            return (
          <tr className="border-b border-borderStroke dark:border-white/10" key={`transaction-${transactionIndex}`}>
            <td className="whitespace-wrap px-6 py-4">{transactionIndex + 1}</td>
            <td className="whitespace-wrap px-6 py-4">{transaction.description}</td>
            <td className="whitespace-wrap px-6 py-4">{transaction.type}</td>
            <td className="whitespace-wrap px-6 py-4">{formatUSD(transaction.amount)}</td>
            <td className="whitespace-wrap px-6 py-4">{transaction.status}</td>
          </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </Card>
  );
}
