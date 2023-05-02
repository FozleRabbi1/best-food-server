const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors());

const chefData = require("./datas/chef.json")
const allFoods = require("./datas/allFoos.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/chef", (req, res) => {
  res.send(chefData)
})


app.get("/chef/:name", (req, res) => {
  const name = req.params.name;
  const modifyName = name.replace(/\s+/g, '');
  const getData = chefData.find(data => data.ChefName.replace(/\s+/g, '') == modifyName)
  // console.log(modifyName)
  res.send(getData)
})

app.get("/allFoods", (req, res) => {
  res.send(allFoods)
})


app.get("/allFoods/:name", (req, res) => {
  const name = req.params.name;
  const modifyName = name.replace(/\s+/g, '');
  const filterData = allFoods.filter(data => data.name.replace(/\s+/g, '') == modifyName)
  res.send(filterData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})