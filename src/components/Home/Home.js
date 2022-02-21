import React from "react"
import Chart from '../Home/chart'
import Circle from '../Home/circle'
import PickDate from '../Home/calendar'

const Home = () => { 
    return (
            <div className="content">
                <h1>Thống kê</h1>
                <PickDate />
                <div style={{ height: 200 }}>
                    <Chart />
                </div>
                <div className="total">
                    <p>Tổng doanh thu theo tuần</p>
                    <h3>525.145.000 </h3>
                    <h5>đồng</h5>
                </div>
                <Circle />
            </div>
    )
}

export default React.memo(Home) 