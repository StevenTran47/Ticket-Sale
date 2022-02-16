import React from "react"
import '../../assets/css/home.css'

const Home = () => {
    
    return (
            <div className="content">
                <h1>Thống kê</h1>
                    <div className="chart">
                    <h3>Doanh thu</h3>
                        <div className="chart-number-total">
                            <p>260tr</p>
                            <p>220tr</p>
                            <p>180tr</p>
                            <p>140tr</p>
                        </div>  
                        <div className="chart-shape">
                            <img style={{position:'relative',width:'1000px',top:'28px',paddingLeft:'50px'}} src="./img/Line.png"></img>
                            <img style={{position:'relative',width:'1000px',top:'70px',paddingLeft:'50px'}} src="./img/Line.png"></img>
                            <img style={{position:'relative',width:'1000px',top:'110px',paddingLeft:'50px'}} src="./img/Line.png"></img>
                            <img style={{position:'relative',width:'1000px',top:'150px',paddingLeft:'50px'}} src="./img/Line.png"></img>
                            <img style={{position:'relative',width:'1000px',top:'6px',paddingLeft:'50px'}} src="./img/Shape-1.png"></img>
                            <img style={{position:'relative',width:'1000px',top:'-140px',paddingLeft:'50px'}} src="./img/Shape-2.png"></img>
                        </div>
                        <div className="chart-day-total">
                            <p>Thứ 2</p>
                            <p>Thứ 3</p>
                            <p>Thứ 4</p>
                            <p>Thứ 5</p>
                            <p>Thứ 6</p>
                            <p>Thứ 7</p>
                            <p>CN</p>
                        </div>
                    </div>
            </div>
    )
}

export default React.memo(Home) 