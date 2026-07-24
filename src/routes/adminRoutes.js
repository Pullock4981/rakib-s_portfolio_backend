const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect } = require('../middlewares/authMiddleware');

// All routes here are protected by JWT token
router.use(protect);

router.put('/settings', adminController.updateSettings);

// Generic CRUD endpoints for (Project, Experience, Education, Skill, Research)
// Passed dynamically in the URL (e.g., /api/admin/Project, /api/admin/Experience)
router.post('/:modelName', adminController.addDoc);
router.put('/:modelName/:id', adminController.updateDoc);
router.delete('/:modelName/:id', adminController.deleteDoc);

module.exports = router;
