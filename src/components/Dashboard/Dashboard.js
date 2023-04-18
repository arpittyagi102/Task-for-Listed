import React from "react";
import "./dashboard.css";
//import MyChart from './MyChart'
import Dashboardsidebar from "./Dashboard-sidebar/Dashboardsidebar";
//import LineChart from "./LineChart";
import searchicon from './search-icon.png'
import bell from './bell.png'
import dp from './dp.png'

export default function Dashboard() {
    return (
        <>
            <div className="outer">
                <div className="left">
                    <Dashboardsidebar />
                </div>
                <div className="main-page">
                    <div className="header">
                        Dashboard
                        <div className="header-right">
                            <div className="search-outer">
                                <input className="search-bar" placeholder="Search..." />
                                <img src={searchicon} alt="search icon" className="search-icon" />
                            </div>

                            <img src={bell} alt="bell-icon" className="bell" />
                            <img src={dp} alt="DP" className="dp" />
                        </div>
                    </div>
                    <div className="color-boxes">
                        
                    </div>
                </div>
            </div>
        </>
    )
}