# 0x02. ES6 classes

This project focuses on implementing various ES6 classes with different tasks. Each task is implemented in a separate JavaScript file.

## Tasks

### Task 0: Implementing ClassRoom

- File: 0-classroom.js

Implement a class named `ClassRoom` with a constructor that accepts one attribute named `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`.

### Task 1: Initializing ClassRooms

- File: 1-make_classrooms.js

Import the `ClassRoom` class from `0-classroom.js`. Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

### Task 2: Implementing HolbertonCourse

- File: 2-hbtn_course.js

Implement a class named `HolbertonCourse` with the following constructor attributes:
- `name` (String)
- `length` (Number)
- `students` (array of Strings)

Make sure to verify the type of attributes during object creation. Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Implement a getter and setter for each attribute.

### Task 3: Implementing Currency

- File: 3-currency.js

Implement a class named `Currency` with the following constructor attributes:
- `code` (String)
- `name` (String)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Implement a getter and setter for each attribute. Implement a method named `displayFullCurrency` that returns the attributes in the following format: `name (code)`.

### Task 4: Implementing Pricing

- File: 4-pricing.js

Import the `Currency` class from `3-currency.js`. Implement a class named `Pricing` with the following constructor attributes:
- `amount` (Number)
- `currency` (Currency)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Implement a getter and setter for each attribute. Implement a method named `displayFullPrice` that returns the attributes in the following format: `amount currency_name (currency_code)`. Implement a static method named `convertPrice` that accepts two arguments: `amount` (Number) and `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

### Task 5: Implementing Building

- File: 5-building.js

Implement a class named `Building` with the following constructor attribute:
- `sqft` (Number)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Implement a getter for each attribute. Consider this class as an abstract class. Any class that extends from it should implement a method named `evacuationWarningMessage`. If a class that extends from it does not have an `evacuationWarningMessage` method, throw an error with the message "Class extending Building must override evacuationWarningMessage".

### Task 6: Implementing SkyHighBuilding

- File: 6-sky_high.js

Import `Building` from `5-building.js`. Implement a class named `SkyHighBuilding` that extends from `Building` with the following constructor attributes:
- `sqft` (Number) (must be assigned to the parent class `Building`)
- `floors` (Number)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Implement a getter for each attribute. Override the method named `evacuationWarningMessage` and return the following string: "Evacuate slowly the NUMBER_OF_FLOORS floors".

### Task 7: Implementing Airport

- File: 7-airport.js

Implement a class named `Airport` with the following constructor attributes:
- `name` (String)
- `code` (String)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). The default string description of the class should return the airport code (example below).

### Task 8: Implementing HolbertonClass

- File: 8-hbtn_class.js

Implement a class named `HolbertonClass` with the following constructor attributes:
- `size` (Number)
- `location` (String)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). When the class is cast into a Number, it should return the size. When the class is cast into a String, it should return the location.

### Task 9: Fixing and Completing Code

- File: 9-hoisting.js

Fix the provided code and make it work.

### Task 10: Implementing Car

- File: 10-car.js

Implement a class named `Car` with the following constructor attributes:
- `brand` (String)
- `motor` (String)
- `color` (String)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). Add a method named `cloneCar`. This method should return a new object of the class.

### Task 11: Implementing EVCar

- File: 100-evcar.js

Import `Car` from `10-car.js`. Implement a class named `EVCar` that extends the `Car` class with the following constructor attributes:
- `brand` (String)
- `motor` (String)
- `color` (String)
- `range` (String)

Each attribute must be stored in an “underscore” attribute version (e.g., `name` is stored in `_name`). For privacy reasons, when `cloneCar` is called on an `EVCar` object, the object returned should be an instance of `Car` instead of `EVCar`.

Please refer to the respective files in the directory for the implementation of each class.

## License

This project is licensed under the [MIT License](LICENSE).

---
*This README file was generated by ChatGPT.*
