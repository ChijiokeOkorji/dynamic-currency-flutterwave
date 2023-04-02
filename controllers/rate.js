const axios = require('axios');
const queryString = require('querystring');

const getRate = async (req, res) => {
  try {
    const query = queryString.stringify({
      amount: '1000',
      ...req.body
    });

    const response = await axios.get(`${process.env.FLW_URL}/transfers/rates?${query}`, {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
      }
    });

    return res.status(200).json({
      rate: response.data.data.rate
    });
  } catch(error) {
    return res.status(500).json({
      status: false,
      message: 'Failed to get currency conversion rate',
      error
    });
  }
};

module.exports = {
  getRate
};
