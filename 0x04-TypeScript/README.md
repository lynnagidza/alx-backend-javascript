# 0x04. Typescript

This project involves working with TypeScript and covers various topics and concepts. Here is a summary of each task:

## Tasks

### Task 0: Creating an interface for a student

- Define an interface named "Student" with properties such as firstName, lastName, age, and location.
- Create an array of students and render a table using Vanilla JavaScript, displaying the first name and location of each student.

### Task 1: Building a Teacher interface

- Create an interface named "Teacher" with properties such as firstName, lastName, fullTimeEmployee, yearsOfExperience, and location.
- Allow adding any additional attribute to the Teacher object without specifying its name.

### Task 2: Extending the Teacher class

- Create an interface named "Directors" that extends the Teacher interface and includes an additional attribute called numberOfReports.

### Task 3: Printing teachers

- Write a function named "printTeacher" that takes firstName and lastName as arguments and returns the first letter of the firstName and the full lastName.
- Define an interface named "printTeacherFunction" for the printTeacher function.

### Task 4: Writing a class

- Create a class named "StudentClass" with a constructor that accepts firstName and lastName arguments.
- Implement methods in the class such as workOnHomework and displayName.
- Describe the constructor and class using interfaces.

### Task 5: Advanced types Part 1

- Create interfaces named "DirectorInterface" and "TeacherInterface" with multiple methods.
- Implement classes named "Director" and "Teacher" that implement the respective interfaces.
- Create a function named "createEmployee" that returns either a Director or a Teacher instance based on the provided salary.

### Task 6: Creating functions specific to employees

- Write a function named "isDirector" that accepts an employee as an argument and checks if the employee is a director.
- Write a function named "executeWork" that accepts an employee as an argument and calls the appropriate work tasks based on the employee's type.

### Task 7: String literal types

- Create a string literal type named "Subjects" that allows variables to have the values "Math" or "History" only.
- Write a function named "teachClass" that takes "todayClass" as an argument and returns a string based on the class value.

### Task 8: Ambient Namespaces

- Define a type "RowID" and an interface "RowElement" in a file named "interface.ts".
- Download a library called "crud.js" for database operations and create an ambient file "crud.d.ts" with type declarations for the library's functions.
- Use the defined types and interfaces in the "main.ts" file to interact with the library functions.

### Task 9: Namespace & Declaration merging

- Create files in the "task_4/js/subjects" directory.
- In "Teacher.ts", define a "Teacher" interface within the "Subjects" namespace.
- In "Subject.ts", create a "Subject" class within the "Subjects" namespace that has an attribute "teacher" implementing the "Teacher" interface.
- In "Cpp.ts", use declaration merging to add an optional attribute to the "Teacher" interface and create a "Cpp" class extending "Subject".
- Implement methods in the "Cpp" class and manipulate the "teacher" attribute.

### Task 10: Update task_4/js/main.ts

- Create and export constants for Cpp Subjects, Java Subjects, and React Subjects.
- Create a Teacher object with experienceTeachingC = 10.
- Log information about Cpp, Java, and React subjects, set the teacher, call methods, and print the returned strings.

### Task 11: Brand convention & Nominal typing

- Create a directory named "task_5" and copy configuration files into it.
- Create two interfaces: MajorCredits and MinorCredits with a "credits" property.
- Add a "brand" property to each interface to uniquely identify them.
- Create functions sumMajorCredits and sumMinorCredits that sum the credits of two subjects.

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](../LICENSE).