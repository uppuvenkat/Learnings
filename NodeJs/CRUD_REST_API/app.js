const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const url = 'mongodb://localhost/userdb'
const userRoutes = require('./routes/routes')

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})
app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

app.listen(9000, function(){
        console.log('server started...')
})