import axios from "axios"


const url = "https://covid19.mathdro.id/api"


const fetchData = async () => {
    const response = await axios.get(url)
    return response
    // console.log(response)
}


export default url;