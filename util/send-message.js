
/* eslint camelcase: off */
const axios = require('axios')

const TELEGRAM_API_URL = 'https://api.telegram.org'
const TELEGRAM_CHAN_ID = process.env.TELEGRAM_CHAN_ID || null
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN || null
const MESSAGE_URL = `${TELEGRAM_API_URL}/bot${TELEGRAM_API_TOKEN}/sendMessage`

async function sendMessage(text) {
  try {
    await axios.post(`${MESSAGE_URL}`, {
      parse_mode: 'html',
      chat_id: TELEGRAM_CHAN_ID,
      text
    })
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = {sendMessage}
