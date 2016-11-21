// built-in modules
const childProcess = require('child_process')
const path = require('path')

// npm modules
const chalk = require('chalk')

// helpers
function pad8 (str) { return '        ' + str }
function padLines (str) { return str.split('\n').map(pad8).join('\n') }

// constants
const scriptPath = path.join(__dirname, 'pg-init.sh')

/**
 * @param {string} dbName name of a new database to create
 * @returns {Promise} promised object with `raw` and `pretty` string outputs
 */
function createDb (dbName) {
  return new Promise((resolve, reject) => {
    childProcess.execFile(scriptPath, [dbName], function (err, stdout, stderr) {
      if (err || stderr) return reject(err || stderr)
      const result = {
        raw: stdout,
        pretty: chalk.gray(padLines(stdout))
      }
      resolve(result)
    })
  })
}

module.exports = createDb
