import React from 'react'
import { Pie } from '@ant-design/plots'
import '../../assets/css/circle.css';

const data1 = [{ type: "network 1", value: 38568 }, { type: "network 3", value: 56024 }];
const data2 = [{ type: "network 1", value: 38302 }, { type: "network 3", value: 30256}]
const COLORS = ['#FF8A48', '#4F75FF'];

const Circle = ({ data, color: colorIn }) => {
  const config = {
    appendPadding: 10,
    data,
    width: 246,
    height: 246,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.45,
    color: colorIn,
    legend: false,
    statistic: undefined
  };
  return ( 
    <Pie {...config} />    
  )
}
function circle() {
  return (
    <div className='frame-45'>
          <div className='frame-44'>
            <i></i><p>Vé chưa sử dụng</p>
          </div>
          <div className='frame-43'>
            <i></i><p>Vé đã sử dụng</p>
          </div>
          <div className='frame-7'>
              <h2>Gói sự kiện</h2>
              <div className='chart-7'>
                <Circle data={data2} color={COLORS} />
                <div className='elip3'>
                  <p>30256</p>
                </div>
                <div className='elip2'>
                <p>28302</p>
                </div>
              </div>
          </div>
          <div className='frame-53'>
                <h2>Gói gia đình</h2>
                    <div className='chart-53'>
                    <Circle data={data1} color={COLORS} />
                      <div className='elip3-1'>
                        <p>56024</p>
                      </div>
                      <div className='elip2-1'>
                      <p>13568</p>
                      </div>
                    </div>
          </div>

          {/* <div className='frame-30'>
            <p>Tháng 4,2021</p><i><img src='./img/fi_calendar.png'></img></i>
          </div>

          <div className='frame-30-1'>
            <p>Tháng 4,2021</p><i><img src='./img/fi_calendar.png'></img></i>
          </div> */}
        </div>
  )
}

export default circle;
