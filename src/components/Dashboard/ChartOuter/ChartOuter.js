import React from "react";
import { options, data } from './Chartdata';
import { Line } from "react-chartjs-2"

export default function ChartOuter() {
    return (
        <>
            <div style={{ height: '250px', width: '95%', padding:'0px 20px' }}>
                <Line data={data} options={options} />
            </div>
        </>
    )
}
