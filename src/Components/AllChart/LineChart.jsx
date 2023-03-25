import React from 'react'
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,  // x
    LinearScale, // y
    PointElement,
    Tooltip,
    Title,
    Legend,
    Filler
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,  // x
    LinearScale, // y
    PointElement,
    Tooltip,
    Title,
    Legend,
    Filler

)

export default function LineChart(props) {
    return (
    <div className="chart-container">
    <Line
      data={{
        labels: [
          props.data[0],
          props.data[1],
          props.data[2],
          props.data[3],
          props.data[4],
          props.data[5],
        ],
        datasets: [
          {
            label: props.name,
            data: props.data,
            fill: true,
            backgroundColor: ["rgba(255, 99, 132, 0.8)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            
          },
        ],
      }}
      options={{
        plugins: {
        legend: { 
            labels: {
                boxWidth: 0,
            }
        }
        },
       
        tension: 0.5}}
        
    />
  </div>)
}
