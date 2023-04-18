import React from "react";
import {data,options} from "./PieChartdata";
import { Pie } from "react-chartjs-2"

export default function ChartOuter() {
    return (
        <>
            <div style={{ height: '180px', width: '65%', margin:"0px 20px" }}>
                <Pie data={data} options={options}/>
            </div>
        </>
    )
}
