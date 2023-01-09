import { fnGetChartData } from "../ChartsContainer/ChartsContainer";

const getChartsData = (id) => {
  const chartData = [];
  let getFullChartData = fnGetChartData();
  for (let curr in getFullChartData) {
    const newArr = [...getFullChartData[curr]];
    const firstIndex = newArr.shift();
    if (+id === firstIndex.id) {
      chartData.push(...newArr);
    }
  }
  return chartData;
};
export { getChartsData };
