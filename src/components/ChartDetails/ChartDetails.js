import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AreaChartItem from "../ChartItem/AreaChartItem";
import BarChartItem from "../ChartItem/BarChartItem";
import ComposedChartItem from "../ChartItem/ComposedChartItem";
import LineChartItem from "../ChartItem/LineChartItem";
import PieChartItem from "../ChartItem/PieChartItem";
import RadarChartItem from "../ChartItem/RadarChartItem";
import RadialBarChartItem from "../ChartItem/RadialBarChartItem";
import { getChartsData } from "../utilities/getChartsData";

const ChartDetails = () => {
  const [chart, setChart] = useState({});
  const param = useParams();
  let id = param.chartsID;
  useEffect(() => {
    const chartData = getChartsData(id);
    setChart(chartData);
  }, [id]);

  return (
    <div>
      <h2>Chart Details {chart.length}</h2>
      {+id === 1 && <AreaChartItem chart={chart}></AreaChartItem>}
      {+id === 2 && <BarChartItem chart={chart}></BarChartItem>}
      {+id === 3 && <LineChartItem chart={chart}></LineChartItem>}
      {+id === 4 && <ComposedChartItem chart={chart}></ComposedChartItem>}
      {+id === 5 && <RadarChartItem chart={chart}></RadarChartItem>}
      {+id === 6 && <RadialBarChartItem chart={chart}></RadialBarChartItem>}
      {+id === 7 && <PieChartItem chart={chart}></PieChartItem>}
    </div>
  );
};

export default ChartDetails;
