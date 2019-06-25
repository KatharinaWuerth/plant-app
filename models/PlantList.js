const mongoose = require('mongoose')

const plantListSchema = new mongoose.Schema([
  {
    title: String,
    img: String,
    isBookmarked: { type: Boolean, default: false },
    tagList: [String],
    description: String,
    userNote: String,
  },
])

module.exports = mongoose.model('PlantList', plantListSchema)
