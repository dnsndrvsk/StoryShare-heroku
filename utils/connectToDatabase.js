import mongoose from 'mongoose'
import Promise from 'bluebird'
mongoose.Promise = Promise

function setUpConnection(dbUrl, intervalID) {
  mongoose.connect(dbUrl, { useMongoClient: true })
    .then((response) => {
      clearInterval(intervalID)
      console.log(`Connected to ${dbUrl}`)
    })
    .catch((error) => {
      console.log(`Failed to connect to ${dbUrl}`)
    })
}

export default (dbUrl) => {
  const connectTimerID = setInterval(() => {
    setUpConnection(dbUrl, connectTimerID)
  }, 3000)
}