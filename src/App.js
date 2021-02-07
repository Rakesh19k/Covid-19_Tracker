import './App.css';
import {Cards, Chart, CounterPicker} from "./components"
// import ApiData from './components/Api/ApiData';
import React, {useState, useEffect} from "react"
import axios from "axios"
import fetchData from "./Api/ApiData"
import CoronaImage from "./Image/image.png"

function App() {
  const [Country, setCountry] = useState([])
  const [data, setData] = useState({})
  const [Confirmed, setConfirmed] = useState({})
  const [Recovered, setRecovered] = useState({})
  const [Deaths, setDeaths] = useState({})


  const handleChange = async (country) => {
    setCountry(country)
    await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(res => {
          // console.log(res.data)
          setData(res.data)
          // setConfirmed(res.data.confirmed.value)
          // setRecovered(res.data.recovered.value)
          // setDeaths(res.data.deaths.value)
          // console.log(Confirmed)
         
         
      })
     
     
  }


  
 
  return (
    <div className="app">
      <img className="covidImage" alt="Covid-19" src={CoronaImage}/>
      <Cards data={data} country={Country} />
      <CounterPicker handleChange={handleChange}/>
      <Chart data={data} country={Country} />
     
      {/* <ApiData/> */}
    </div>
  );
}

export default App;
