import React from "react";
import './dashboard.css';

export default function Colorbox(props){
    return(
        <>
            <div className="color-box" style={{backgroundColor:`${props.color}`}}>
                <img src={props.icon} className="colorbox-icon" alt="icon"/>
                <p>{props.title}</p>
                <h2 className="colorbox-value">{props.value}</h2>
            </div>
        </>
    )
}