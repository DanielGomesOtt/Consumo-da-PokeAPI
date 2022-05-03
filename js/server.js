const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', async (req, res)=>{
    
    try {
        const { data } = await axios("https://pokeapi.co/api/v2/pokemon/")
        return res.json(data.results)
    } catch (error) {
        console.error(error)
    }
})

app.listen(3000)