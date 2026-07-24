const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  categoryTitle: { type: String, required: true },
  skills: [{
    name: { type: String, required: true },
    description: { type: String },
    iconName: { type: String } // e.g., 'FaReact', 'FaFigma'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
