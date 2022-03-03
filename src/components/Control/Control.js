import React from "react"
import Search from "../shared/search"
import Ticket from "./ticket"
import "../../assets/css/control.css"
const Home = ()=>{
    return (
        <div className="content">
            <h1>Đối soát vé</h1>
            <Search />
            <div className="filter-ticket-content">
                <div className="filter-ticket">
                    <Ticket />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Home)