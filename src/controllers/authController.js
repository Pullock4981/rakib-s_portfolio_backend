const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const adminData = await authService.loginAdmin(email, password);
    res.json({ success: true, data: adminData });
  } catch (error) {
    res.status(401);
    next(error);
  }
};

// Endpoint to register a new admin
const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email and password required");
    
    await authService.createInitialAdmin(email, password);
    res.status(201).json({ success: true, message: 'Admin seeded successfully. You can now login.' });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  login,
  register
};
