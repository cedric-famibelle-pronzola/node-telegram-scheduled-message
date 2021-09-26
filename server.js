#!/usr/bin/env node

require('dotenv').config()
const cron = require('node-cron')
const express = require('express')
const morgan = require('morgan')

function sendWithCron() {
  cron.schedule('*/10 * * * * *', () => {
    console.log('running a task every 10 second')
  })
}

async function main() {
  const app = express()
  const port = process.env.PORT || 5000

  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
  }

  app.listen(port)

  sendWithCron()
}

main().catch(error => {
  console.log(error)
  process.exit(1)
})
