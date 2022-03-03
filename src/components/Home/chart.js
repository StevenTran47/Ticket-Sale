import React from "react"
import { Area } from "@ant-design/charts"
import '../../assets/css/chart.css'


function chart()  {
  const ChartLine = () => {
    const data = [
      {
          date: 'Thứ 2',
          scales: '140tr',
      },
      {
          date: 'Thứ 3',
          scales: '180tr',
      },
      {
          date: 'Thứ 4',
          scales: '180tr',
      },
      {
          date: 'Thứ 5',
          scales: '220tr',
      },
      {
          date: 'Thứ 6',
          scales: '220tr',
      },
      {
          date: 'Thứ 7',
          scales:  '260tr',
      },
      {
          date: 'CN',
          scales: '180tr',
      },
  ];

  const config = {
      data,
      padding: 40,
      xField: 'date',
      yField: 'scales',
      xAxis: {
          tickCount: 7,
          range: [0, 1],
      },
      yAxis: {
          minLimit: 140,
          maxLimit: 260,
          tickCount: 4,
      },
      color: '#FF993C',
      smooth: true,
      areaStyle: () => {
          return {
              fill: 'l(270) 0:#ffffff 1:#FAA05F',
          };
      },
  };

  return <Area {...config} />;
};
  return (
    <div className="chart">
      <ChartLine />    
    </div>
  )
}

export default chart