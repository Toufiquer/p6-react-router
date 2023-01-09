import React from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
const RadialBarChartItem = ({ chart }) => {
  if (chart.length >= 7) {
    return (
      <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={chart} startAngle={180} endAngle={0}>
        <RadialBar minAngle={15} label={{ fill: "#666", position: "insideStart" }} background clockWise={true} dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
        <Tooltip />
      </RadialBarChart>
    );
  }
  return <></>;
};

export default RadialBarChartItem;
