require('dotenv').config()
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./Controllers/authController')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 4311
const app = express()

app.use(express.json())
 app.use(session({
     secret: SECRET,
     resave: false,
     saveUninitialized: false,
     cookie: {
         maxAge: 1000 * 60 * 60 * 24 * 10
     }
 }))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

massive(CONNECTION_STRING).then(db => {
    app.set ('db',db)
    app.listen(PORT, ()=> console.log(`^.^ welcome to ${PORT}`))
}).catch(error => console.log('error connection to Db', error))