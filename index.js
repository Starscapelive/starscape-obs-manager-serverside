import express from 'express'
import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(express.json())


const adapter = new JSONFile('./db.json')
const db = new Low(adapter)
await db.read().then()
const { posts } = db.data

  // "obsVersion":"",
  // "platform":0,
  // "name":"",
  // "sortBy":0,
  // "offset":0,
  // "limit":0
app.post('/obs/searchPlugin', async (req, res, next) => {
  const post = posts.find((p) => p.id === req.params.id)
  res.send(post)
})


app.post('/obs/getPluginDetails', async (req, res, next) => {
  console.log('in getPluginDetails',posts)
  const post = posts.find((p) => p.id === req.params.id)
  res.send(post)
})

app.post('/obs/getMyPluginList', async (req, res, next) => {
  const post = posts.find((p) => p.id === req.params.id)
  res.send(post)
})

app.post('/obs/getOBSManagerConfig', async (req, res, next) => {
  const post = posts.find((p) => p.id === req.params.id)
  res.send(post)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

