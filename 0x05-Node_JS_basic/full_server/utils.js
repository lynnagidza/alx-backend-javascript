const fs = require('fs').promises;

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then(data => {
      const lines = data.trim().split('\n');
      const students = {
        CS: [],
        SWE: [],
      };

      for (const line of lines.slice(1)) {
        const [firstname, lastname, age, field] = line.split(',').map(item => item.trim());
        
        if (field === 'CS' || field === 'SWE') {
          students[field].push(firstname);
        }
      }

      return students;
    })
    .catch(error => {
      throw new Error('Cannot load the database');
    });
}

module.exports = {
  readDatabase,
};
