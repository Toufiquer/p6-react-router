import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ChartName from "../ChartName/ChartName";
let fnGetChartData;
const ChartsContainer = () => {
  const [singleChart, setSingleChart] = useState([]);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch("./data/charts.json")
      .then((res) => res.json())
      .then((data) => {
        const arr = [];
        for (let curr in data) {
          arr.push(data[curr][0]);
        }
        setSingleChart(arr);
        setChartData(data);
      });
  }, []);
  fnGetChartData = () => {
    return chartData;
  };
  return (
    <div className="grid grid-cols-[400px_1fr] min-h-screen">
      <div className="bg-blue-400">
        {singleChart.map((curr) => (
          <ChartName curr={curr} key={curr.id}></ChartName>
        ))}
      </div>
      <div className="bg-blue-500">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ChartsContainer;
export { fnGetChartData };
