import axios from 'axios'

const instance=axios.create({
    baseURL:'https://us-central1-sheoran-clone.cloudfunctions.net/api'
})

export default instance

//https://us-central1-sheoran-clone.cloudfunctions.net/api
//http://localhost:5001/sheoran-clone/us-central1/api