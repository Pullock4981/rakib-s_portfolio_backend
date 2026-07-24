const Settings = require('../models/Settings');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Research = require('../models/Research');

const getFullPortfolioData = async () => {
  // Fetch all collections in parallel for speed
  const [settings, experience, education, skills, projects, research] = await Promise.all([
    Settings.findOne() || {}, // assuming only 1 settings document
    Experience.find().sort({ createdAt: -1 }),
    Education.find().sort({ createdAt: -1 }),
    Skill.find(),
    Project.find().sort({ createdAt: -1 }),
    Research.find().sort({ createdAt: -1 })
  ]);

  return {
    settings,
    experience,
    education,
    skills,
    projects,
    research
  };
};

module.exports = {
  getFullPortfolioData
};
