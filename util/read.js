const path = require('path')
const {readFile} = require('fs').promises

async function readHtml(name) {
  const filePath = path.join(__dirname, '..', 'files', name)

  const file = await readFile(filePath, 'utf8')
  return file
}

module.exports = {readHtml}
