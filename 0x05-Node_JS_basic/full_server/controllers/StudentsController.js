const { readDatabase } = require('../full_server/utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(req.databaseFileName)
      .then(students => {
        res.status(200).send('This is the list of our students\n');
        for (const field of Object.keys(students).sort()) {
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
        }
        res.end();
      })
      .catch(error => {
        res.status(500).send(`Error: ${error.message}\n`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE\n');
      return;
    }

    readDatabase(req.databaseFileName)
      .then(students => {
        res.status(200).send(`List: ${students[major].join(', ')}\n`);
      })
      .catch(error => {
        res.status(500).send(`Error: ${error.message}\n`);
      });
  }
}

module.exports = StudentsController;
