const contactService = require('../services/contactService');

const handleContactSubmit = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    
    if (!firstName || !lastName || !email || !message) {
      res.status(400);
      throw new Error('Please provide all required fields');
    }

    await contactService.sendContactEmail({ firstName, lastName, email, phone, message });
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleContactSubmit
};
