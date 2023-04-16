import React from "react";
import './Dashboardsidebar.css';
import trans from './transactions.png'
import dash from './dashboard.png'
import shed from './schedules.png'
import sett from './settings.png'
import user from './users.png';

export default function Dashboardsidebar() {
    return (
        <>
            <div className="side-bar">
                <h1 className="side-bar-heading">
                    Board.
                </h1>
                <div className="side-board-items selected">
                    <img className="side-board-item-icon" src={dash} alt="side-board-item-icon"></img>
                    <div className="side-board-item-label">Dashboard</div>
                </div>
                <div className="side-board-items">
                    <img className="side-board-item-icon" src={trans} alt="side-board-item-icon"></img>
                    <div className="side-board-item-label">Transactions</div>
                </div>
                <div className="side-board-items">
                    <img className="side-board-item-icon" src={shed} alt="side-board-item-icon"></img>
                    <div className="side-board-item-label">Shedule</div>
                </div>
                <div className="side-board-items">
                    <img className="side-board-item-icon" src={user} alt="side-board-item-icon"></img>
                    <div className="side-board-item-label">Users</div>
                </div>
                <div className="side-board-items">
                    <img className="side-board-item-icon" src={sett} alt="side-board-item-icon"></img>
                    <div className="side-board-item-label">Settings</div>
                </div>
                <div className="bottom-cover">
                    <p className="bottom-buttons">Help</p>
                    <p className="bottom-buttons">Contact us</p>
                </div>
            </div>
        </>
    )
}