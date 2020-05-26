const mysql = require('mysql')
require('dotenv/config');

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('DB connection succeded')
  else 
    console.log(`DB connection failed \n Erro: ${JSON.stringify(err)}`)
})

module.exports = mysqlConnection;