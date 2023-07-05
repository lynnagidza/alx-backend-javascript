//Task 1
interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

//Task 2
interface Directors extends Teacher{
    numberOfReports: number;
}

//Task 3
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
  }

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

//Task 4
interface StudentClassInterface{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return 'Currently working';
    }

    displayName(): string{
        return this.firstName;
    }
}
