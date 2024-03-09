import Card from "@/components/Card/Card";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1>Hello, Ivushkin</h1>
        <p>View and control your finances here !</p>
      </div>
      <div className="grid grid-cols-2">
        <div>
        <Card title="Balance statistic" />
        </div>
        <Card title="" />
      </div>
    </>
  );
}
