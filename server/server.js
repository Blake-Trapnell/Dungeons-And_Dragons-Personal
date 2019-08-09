require('dotenv').config()
require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const invCtrl = require('./Controllers/invController')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 9000
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set ('db',db)
    app.listen(PORT, ()=> console.log(`Its Port ${PORT} Bitch`))
}).catch(error => console.log('error connection to Db', error))