import React from "react";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

const ComposedChartItem = ({ chart }) => {
  return (
    <ComposedChart width={730} height={250} data={chart}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default ComposedChartItem;
