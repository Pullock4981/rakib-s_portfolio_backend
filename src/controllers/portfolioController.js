const portfolioService = require('../services/portfolioService');

const getPortfolio = async (req, res, next) => {
  try {
    const data = await portfolioService.getFullPortfolioData();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPortfolio
};
