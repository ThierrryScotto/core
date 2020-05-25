const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your password',
  database: 'test'
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('DB connection succeded')
  else 
    console.log(`DB connection failed \n Erro: ${JSON.stringify(err)}`)
})

module.exports = mysqlConnection;