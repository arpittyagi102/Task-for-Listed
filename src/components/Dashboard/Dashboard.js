import React from "react";
import "./dashboard.css";
import Dashboardsidebar from "./Dashboard-sidebar/Dashboardsidebar";
import searchicon from './media/search-icon.png'
import bell from './media/bell.png'
import dp from './media/dp.png'
import Colorbox from "./Colorbox.js";
import revenuepng from './media/raise.png'
import transactionspng from './media/tags.png'
import userspng from './media/user.png'
import likepng from './media/thumbs-up.png'
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import ChartOuter from "./ChartOuter/ChartOuter";
import PieChartOuter from './ChartOuter/PieChartOuter'

Chart.register(CategoryScale);
export default function Dashboard() {
    const revenue = "$2,129,430";
    const transactions = "1,520";
    const likes = "9,721";
    const users = "892";
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
                                <input className="search-bar" placeholder="Search..." style={{backgroundColor:"white"}} />
                                <img src={searchicon} alt="search icon" className="search-icon" />
                            </div>

                            <img src={bell} alt="bell-icon" className="bell" />
                            <img src={dp} alt="DP" className="dp" />
                        </div>
                    </div>
                    <div className="color-boxes">
                        <Colorbox color="#DDEFE0" icon={revenuepng} title="Total Revenue" value={revenue} />
                        <Colorbox color="#F4ECDD" icon={transactionspng} title="Total Transactions" value={transactions} />
                        <Colorbox color="#EFDADA" icon={likepng} title="Total Likes" value={likes} />
                        <Colorbox color="#DEE0EF" icon={userspng} title="Total Users" value={users} />
                    </div>
                    <div className="chart-outest">
                        <ChartOuter />
                    </div>
                    <div className="bottom-cover">
                        <div className="piechart-box">
                            <PieChartOuter/>
                        </div>
                        <div className="schedule-box" style={{padding:"5px 40px",display:"flex","justifyContent":"space-evenly",flexDirection:"column"}}>
                            <div className="schedule-header" style={{display:"flex","justifyContent":"space-between",alignItems:"center"}}>
                                <h3 style={{margin:"5px"}}>Today's schedule</h3>
                                See All 
                            </div>
                            <div style={{width:"100%"}} className="time-table">
                                <p style={{fontWeight:"bold"}}>Meeting with suppliers from Kuta Bali</p>
                                <p>14.00-15.00</p>
                                <p>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div style={{width:"100%",borderColor:"#6972C3"}} className="time-table">
                                <p style={{fontWeight:"bold"}}>Check operation at Giga Factory 1</p>
                                <p>18.00-20.00</p>
                                <p>at Central Jakarta </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}