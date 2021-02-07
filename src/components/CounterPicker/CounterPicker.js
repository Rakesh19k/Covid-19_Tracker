import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from "@material-ui/core"
import "./CounterPicker.css"
import axios from 'axios'

function CounterPicker({handleChange}) {
    const[Country, setCountry] = useState([])


    useEffect(() => {
        axios.get(`https://covid19.mathdro.id/api/countries`)
        .then(res => {
            // console.log(res.data.countries, "Country name")
            setCountry(res.data.countries)
         //    console.log(Country)
        })
     }, [])


    return (
        <div>
           <FormControl className ="formControl">
               <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                   <option value="">Globle</option>
                   {Country.map((cnt, iso) => 
                   <option key={iso} value={cnt.name}>{cnt.name}</option>
                   )}
               </NativeSelect>
           </FormControl>
        </div>
    )
}

export default CounterPicker
