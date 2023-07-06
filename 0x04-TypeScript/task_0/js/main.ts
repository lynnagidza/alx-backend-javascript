// Define an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Lynn",
  lastName: "Agidza",
  age: 24,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Rose",
  age: 53,
  location: "Busia",
};

// Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table and append a new row for each element in the studentsList array
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body of the HTML document
document.body.appendChild(table);
