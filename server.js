const setupServer = require('./setup-server')
const app = setupServer()

const PlantList = require('./models/PlantList')

app.get('/plants', (req, res) => {
  PlantList.find()
    .then(plants => res.json(plants))
    .catch(err => res.json(err))
})
