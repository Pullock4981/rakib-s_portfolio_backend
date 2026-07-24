const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  conference: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  link: { type: String, default: '#' }
}, { timestamps: true });

module.exports = mongoose.model('Research', ResearchSchema);
