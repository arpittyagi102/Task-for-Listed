import React from "react";
import "./dashboard.css"
import Dashboardsidebar from "./Dashboard-sidebar/Dashboardsidebar";

export default function Dashboard() {
    return (
        <>
            <div className="outer">
                <Dashboardsidebar />
            </div>
        </>
    )
}