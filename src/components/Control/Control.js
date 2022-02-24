import React from "react"
import Search from "../shared/search"
const Home = ()=>{
    return (
        <div className="content">
        <h1>Đối soát vé</h1>
        <Search />
        </div>
    )
}

export default React.memo(Home)