const express = require('express')
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const app = express()
app.use(express.json())


const adapter = new FileSync('./db.json')
const db = low(adapter)

app.post('/obs/searchPlugin', async (req, res, next) => {
  const data = db.get("plugins").value();
  res.send({
    code:0,
    data: {
      items: data,
      totalCnt: 1
    }
  });
})


app.post('/obs/getPluginDetails', async (req, res, next) => {
  const data = db.get("plugins").find({id: req.body.id}).value();
  res.send({
    code: 0,
    data
  })
})

app.post('/obs/getMyPluginList', async (req, res, next) => {
  const {ids,names} = req.body
  console.log(req.body)
  let items = []
  for(let id of ids || []) {
    const data_id = db.get("plugins").find({id}).value();
    items.push(data_id);
  }
  for(let name of names || []) {
    const data_name = db.get("plugins").find({plugin_alias:name}).value();
    items.push(data_name);
  }

  res.send({
    code: 0,
    data:{items}
  })
})

app.get('/obs/getOBSManagerConfig', async (req, res, next) => {
  res.send({
    "code": 0,
    "data": {
        "version": "0.3.3",
        "downloadLink": "  https://starh5.s3.us-west-2.amazonaws.com/master/app-release/obs/binary/starscape-obs-manager-Setup.0.3.3.exe"
    }
})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

