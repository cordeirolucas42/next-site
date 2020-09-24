const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  },
})

exports.query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    console.log("erro na query")
    return { error }
  }
}