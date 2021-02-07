import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Line, Bar} from "react-chartjs-2"
import "./Chart.css"

function Chart({data, country}) {
    const[dailyData, setDailyData] = useState([])
   
    
    useEffect(() => {
        axios.get(`https://covid19.mathdro.id/api/daily`)
        .then(res => {
            // console.log(res.data)
            setDailyData(res.data)
            
        })
       
    }, [])

    


    const lineChart = (
        dailyData.length ? (
        <Line
            data = {{
                labels: dailyData.map(({reportDate}) => reportDate),
                datasets: [{
                    data:  dailyData.map(({confirmed}) => confirmed.total),
                    label: "Infeceted",
                    borderColor: "#3333ff",
                    fill: true
                }, 
                {
                  data: dailyData.map(({recovered}) => recovered.total),
                  label: 'Recovered',
                  borderColor: 'green',
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                  fill: true,
                },
                {
                    data: dailyData.map(({deaths}) => deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }
               
                ],
            }}
        />) :null  
    )


    const barChart = (
        data.confirmed ? (
             <Bar
                 data={{
                     labels: ["Infected", "Recovered", "Deaths"],
                     datasets: [{
                         lable: "People",
                         backgroundColor : [
                             "rgba(0, 0, 255, 0.5)",
                             "rgba(0, 255, 0, 0.5)",
                             "rgba(255, 0, 0, 0.5)",
                         ],
                         data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                     }]
                 }}
 
                 options={{
                     legend:{display: false},
                     title: {display: true, text: `Current State in ${country}`}
                 }}
                 
             />
         ) : null
     )

     
    return (
        <div className="charts">
            {data.hasOwnProperty("confirmed")? barChart: lineChart}
        </div>
    )
}

export default Chart
