import React from 'react'
import fullData from '../../context/fulldata'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend

)


export default function BarChart(props) {

  const data = {
    labels: ['Jan/Fev', 'Mar/Avr', 'Mai/Ju', 'Jui/Août', 'Sep/Oct', 'Nov/Dev'],
    datasets: [
      {
        label: props.name,
        data: props.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1
      }
    ]
  };
  


  const options = {
    plugins: {
     legend: { 
      labels: {
        boxWidth: 0,
     }},

    
  }}


  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
