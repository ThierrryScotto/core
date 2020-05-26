const mysqlConnection = require("../data/data");

module.exports = {
  getAllStudents(req, res) {
    mysqlConnection.query('SELECT * FROM Students', (error, results, fields )=> {
      if (error) res.send({success: false, error: "Erro ao buscar usuários"})
      res.send({success: true, users: results});
    });
  },
  getOneStudent(req, res) {
    mysqlConnection.query('SELECT * FROM Students WHERE register = ?',[req.params.id],
    (error, results, fields )=> {
      if (error) res.send({success: false, error: "Erro ao buscar usuário"})
      res.send({ success: true, user: results[0]});
    });
  },
  deleteStudent(req, res) {
    mysqlConnection.query('DELETE FROM Students WHERE register = ?',[req.params.id],
    (error, results, fields )=> {
      if (error) res.send({success: false, error: "Erro ao deletar usuário"})
      res.send({success: true});
    });
  },
  editStundent(req, res) {
    let { register, name, lastName, email, sex } = req.body.student;
    let sqlCommand = `UPDATE Students
    SET name = "${name}", lastName = "${lastName}", email = "${email}", sex = "${sex}"
    WHERE register = ${Number(register)};`;

    mysqlConnection.query(sqlCommand,(error, results, fields )=> {
      if (error) res.send({success: false, error: "Erro ao editar usuário"})
      res.send({success: true});
    });
  }, 
  registerStudent(req, res) {
    let { student } = req.body;

    if (!student) 
      res.send({ error: "Houve algum erro"})

    let sqlCommand = `INSERT INTO Students (name, email, document, lastName, sex) VALUES
     ("${student.name}","${student.email}", "${student.document}", "${student.lastName}", "${student.sex}");`

    mysqlConnection.query(sqlCommand,(error, results, fields )=> {
      if (error) res.send({success: false, error: "Erro ao cadastrar usuário"})
      res.send({success: true})
    });
  }
}