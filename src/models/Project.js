const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
