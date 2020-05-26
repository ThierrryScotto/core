const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const studentController = require('./controllers/studentController')
const utils = require("./utils/utils")

app.get('/students', studentController.getAllStudents);
app.get('/student/:id', studentController.getOneStudent)
app.delete('/delete/:id', studentController.deleteStudent)
app.put('/edit', studentController.editStundent)
app.post('/register', utils.checkDocument, studentController.registerStudent)

app.listen(2000, (err, success) => {
  if (!err) console.log('connect');
  else console.log('error', err)
})