require('dotenv').config()
require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const invCtrl = require('./Controllers/invController')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 4311
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set ('db',db)
    app.listen(PORT, ()=> console.log(`^.^ welcome to ${PORT}`))
}).catch(error => console.log('error connection to Db', error))