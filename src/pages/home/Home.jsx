import React from "react";
import { userData } from "../../dummyData";
import Chart from "../../components/chart/Chart";

export default function Home() {
  return (
      <Chart data={userData} title="User Analytics"  dataKey="Active User"/>
  );
}
