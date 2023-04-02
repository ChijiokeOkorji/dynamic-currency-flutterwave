const axios = require('axios');
const { generateReference } = require('../utilities/reference');

const generateCheckout = async (req, res) => {
  try {
    const payload = {
      tx_ref: generateReference(),
      redirect_url: process.env.WEBSITE_BASE_URL,
      customer: {
        email: 'user@example.com',
        name: 'John Doe'
      },
      customizations: {
        title: 'Dynamic Currency Checkout'
      }
    }

    const response = await axios.post(`${process.env.FLW_URL}/payments`, {
      ...payload,
      ...req.body
    }, {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
      }
    });

    return res.status(200).json({
      link: response.data.data.link
    });
  } catch(error) {
    return res.status(500).json({
      status: false,
      message: 'Failed to generate checkout link',
      error
    });
  }
};

module.exports = {
  generateCheckout
};
