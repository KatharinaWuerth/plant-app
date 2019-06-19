const mongoose = require('mongoose')

const plantListSchema = new mongoose.Schema([
  {
    title: String,
    img: String,
    id: Number,
    isBookmarked: { type: Boolean, default: false },
    tagList: [String],
    description: String,
  },
])

module.exports = mongoose.model('PlantList', plantListSchema)
