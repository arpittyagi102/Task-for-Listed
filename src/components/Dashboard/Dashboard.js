import React from "react";
import "./dashboard.css";
//import MyChart from './MyChart'
import Dashboardsidebar from "./Dashboard-sidebar/Dashboardsidebar";
//import LineChart from "./LineChart";

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
                    <div className="search-outer">
                        search icon image
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}