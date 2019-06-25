const setupServer = require('./setup-server')
const app = setupServer()

const PlantList = require('./models/PlantList')

app.get('/plants', (req, res) => {
  PlantList.find()
    .then(plants => res.json(plants))
    .catch(err => res.json(err))
})

app.post('/plants', (req, res) => {
  PlantList.create(req.body)
    .then(plant => res.json(plant))
    .catch(err => res.json(err))
})
