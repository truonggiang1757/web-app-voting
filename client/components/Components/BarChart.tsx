import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = () => {
    const [chartData, setChartData] = useState({
    datasets: [],
  });
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ['Leonel Messi', 'Emi Martinez', 'Enzo Fernandez', 'Angel Di Maria', 'Papu Gomez'],
            datasets: [{
                label: 'Votes',
                data: [7503, 3499, 2145, 1201, 897],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)'
            }],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Total votes'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
  return (
    <div>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    </div>
  )
}

export default BarChart