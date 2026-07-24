const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    return {
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    };
  } else {
    throw new Error('Invalid email or password');
  }
};

const createInitialAdmin = async (email, password) => {
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    throw new Error('Admin already exists');
  }
  const admin = await Admin.create({ email, password });
  return admin;
};

module.exports = {
  loginAdmin,
  createInitialAdmin
};
