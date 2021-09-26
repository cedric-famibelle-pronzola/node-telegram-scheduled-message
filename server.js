#!/usr/bin/env node

require('dotenv').config()
const cron = require('node-cron')
const express = require('express')
const morgan = require('morgan')
const {readHtml} = require('./util/read')
const {sendMessage} = require('./util/send-message')

const cronConfig = process.env.CRON_CONFIG || '0 17 * * SUN' // Every sunday at 5 PM (GMT)

async function sendWithCron() {
  const file = await readHtml('networks.html')
  cron.schedule(cronConfig, async () => {
    await sendMessage(file)
  })
}

async function main() {
  const app = express()
  const port = process.env.PORT || 5000

  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
  }

  app.listen(port)

  await sendWithCron()
}

main().catch(error => {
  console.log(error)
  process.exit(1)
})
