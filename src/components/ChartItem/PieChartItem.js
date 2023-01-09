import React from "react";
import { Pie, PieChart } from "recharts";
const PieChartItem = ({ chartPie0, chartPie1 }) => {
  return (
    <PieChart width={730} height={250}>
      <Pie data={chartPie0} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <Pie data={chartPie1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
  );
};

export default PieChartItem;
