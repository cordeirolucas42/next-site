const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const exps = await db.query(escape`
      SELECT * FROM exp;
    `)
  res.status(200).json({ exps })
}