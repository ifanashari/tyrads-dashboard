import React from "react";
import Card from "../Card/Card";

export default function TransactionList() {
  return (
    <Card title="Transaction">
      <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
        <thead className="border-b border-borderStroke font-medium dark:border-white/10">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              First
            </th>
            <th scope="col" className="px-6 py-4">
              Last
            </th>
            <th scope="col" className="px-6 py-4">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-borderStroke dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">Mark</td>
            <td className="whitespace-nowrap px-6 py-4">Otto</td>
            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
