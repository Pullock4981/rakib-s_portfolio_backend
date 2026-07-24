const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  hero: {
    name: { type: String, default: "Jackon Clark" },
    title1: { type: String, default: "Premium" },
    title2: { type: String, default: "UI/UX Designer" },
    description: { type: String, default: "I craft digital experiences..." },
    resumeLink: { type: String, default: "#" }
  },
  about: {
    bio: { type: String, default: "I'm a passionate UI/UX Designer..." }
  },
  contactInfo: {
    email: { type: String, default: "hello@example.com" },
    phone: { type: String, default: "+1 (234) 567 890" },
    address: { type: String, default: "123 Design Street, NY" },
    socialLinks: {
      facebook: { type: String, default: "#" },
      instagram: { type: String, default: "#" },
      twitter: { type: String, default: "#" },
      linkedin: { type: String, default: "#" }
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Settings', SettingsSchema);
