import React, {useState, useEffect} from 'react'
import "./Cards.css"
import axios from "axios"

import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import CountUp from "react-countup"




function Cards({data}) {
    const [Confirmed, setConfirmed] = useState("")
    const [Recovered, setRecovered] = useState("")
    const [Deaths, setDeaths] = useState("")
    const [LastUpdate, setLastUpdate] = useState("")

//    console.log(data, "siufkhsdyjdghjg")
  
    useEffect(() => {
        axios.get(`https://covid19.mathdro.id/api`)
         .then(res => {
            setConfirmed(res.data.confirmed.value)
            setRecovered(res.data.recovered.value)
            setDeaths(res.data.deaths.value)
            setLastUpdate(res.data.lastUpdate)
             // console.log(res)
            
         })
             
     }, [])
 

    return (
        <>

        
        {data.hasOwnProperty("confirmed") ?
        <div className="cards">
        <Grid container spacing={3} justify="center">
             <Grid item component = {Card} xs={6} md={2} className="card infected">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Infeceted</Typography>
                     <Typography variant="h5" >
                         <CountUp Start={0} end={data.confirmed.value} duration={3} separator=","/>
                     </Typography>
                     <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                     <Typography variant="body2">Number of infected cases of COVID_19</Typography>
                 </CardContent>
             </Grid>

             <Grid item component = {Card} xs={6} md={2} className="card recovered">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                     <Typography variant="h5" >
                         <CountUp Start={0} end={data.recovered.value} duration={3} separator=","/>
                     </Typography>
                     <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                     <Typography variant="body2">Number of recovered cases of COVID_19</Typography>
                 </CardContent>
             </Grid>

             <Grid item component = {Card} xs={6} md={2} className="card deaths">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                     <Typography variant="h5" >
                         <CountUp Start={0} end={data.deaths.value} duration={3} separator="," />
                     </Typography>
                     <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                     <Typography variant="body2">Number of deaths cases of COVID_19</Typography>
                 </CardContent>
             </Grid>
        </Grid>
        </div>: <div className="cards">
                    <Grid container spacing={3} justify="center">
                        <Grid item component = {Card} xs={10} md={2} className="card infected">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Infeceted</Typography>
                                <Typography variant="h5" >
                                    <CountUp Start={0} end={Confirmed} duration={3} separator=","/>
                                </Typography>
                                <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of infected cases of COVID_19</Typography>
                            </CardContent>
                        </Grid>

                        <Grid item component = {Card} xs={10} md={2} className="card recovered">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                                <Typography variant="h5" >
                                    <CountUp Start={0} end={Recovered} duration={3} separator=","/>
                                </Typography>
                                <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of recovered cases of COVID_19</Typography>
                            </CardContent>
                        </Grid>

                        <Grid item component = {Card} xs={10} md={2} className="card deaths">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                                <Typography variant="h5" >
                                    <CountUp Start={0} end={Deaths} duration={3} separator="," />
                                </Typography>
                                <Typography color="textSecondary">{new Date(LastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of deaths cases of COVID_19</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </div>

      }
      </>
    )
}

export default Cards




