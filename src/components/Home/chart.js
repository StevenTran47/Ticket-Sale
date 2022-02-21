import React, { useEffect, useState } from "react"
import { Area } from '@ant-design/plots';   
import '../../assets/css/chart.css'


function chart()  {
  const ChartLine = () => {
    const [ data, setData ] = useState([])
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
  
    const config = {
      data,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 5,
      },
      smooth: true,
      line: {
        color: '#FF993C',
        size: 4
      },
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#ffffff 0.74:#FAA05f 1:#FF993C',
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