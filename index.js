import express from 'express'
import path from 'path'
import api from './api'
import middlewares from './middlewares'
import config from './config'
import helper from './utils'

const app = express()
const port = process.env.PORT || config.port
const srcpath  = path.join(__dirname,'/client/build')

helper.connectToDatabase(config.db)

app.use(express.static(__dirname + '/client/build'))
app.use(middlewares.reqParser())
app.use('/api', api)

//default route
app.get("*", (req,res) => {
  res.sendFile(srcpath +'/index.html')
})

app.listen(port, () => {
  console.log(`The server is working on port ${port}`)
})
