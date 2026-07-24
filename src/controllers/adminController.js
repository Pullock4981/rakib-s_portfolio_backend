const adminService = require('../services/adminService');

const updateSettings = async (req, res, next) => {
  try {
    const updatedSettings = await adminService.updateSettings(req.body);
    res.json({ success: true, data: updatedSettings });
  } catch (error) {
    next(error);
  }
};

const addDoc = async (req, res, next) => {
  try {
    const { modelName } = req.params;
    const doc = await adminService.addDocument(modelName, req.body);
    res.status(201).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

const updateDoc = async (req, res, next) => {
  try {
    const { modelName, id } = req.params;
    const doc = await adminService.updateDocument(modelName, id, req.body);
    res.json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

const deleteDoc = async (req, res, next) => {
  try {
    const { modelName, id } = req.params;
    await adminService.deleteDocument(modelName, id);
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateSettings,
  addDoc,
  updateDoc,
  deleteDoc
};
