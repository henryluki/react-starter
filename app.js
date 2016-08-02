import express from 'express'
import path from 'path'

import indexRoute from './routes/index'
import apiRoute from './routes/api'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRoute)
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

export default app