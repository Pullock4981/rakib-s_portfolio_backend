const Settings = require('../models/Settings');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Research = require('../models/Research');

const models = { Project, Experience, Education, Skill, Research };

// Settings
const updateSettings = async (data) => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = new Settings(data);
  } else {
    Object.assign(settings, data);
  }
  return await settings.save();
};

// Generic CRUD for arrays (Projects, Experience, etc.)
const addDocument = async (modelName, data) => {
  if (!models[modelName]) throw new Error('Invalid model');
  return await models[modelName].create(data);
};

const updateDocument = async (modelName, id, data) => {
  if (!models[modelName]) throw new Error('Invalid model');
  return await models[modelName].findByIdAndUpdate(id, data, { new: true });
};

const deleteDocument = async (modelName, id) => {
  if (!models[modelName]) throw new Error('Invalid model');
  return await models[modelName].findByIdAndDelete(id);
};

module.exports = {
  updateSettings,
  addDocument,
  updateDocument,
  deleteDocument
};
