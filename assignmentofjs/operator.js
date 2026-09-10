
// Part A: Arithmetic Operators

// 1. Addition (+)


// Question 1
const classOneCollection = 15000;
const classTwoCollection = 12500;
const totalCollection = classOneCollection + classTwoCollection;

console.log("1. Total collection:", totalCollection);


// Question 2
const morningPages = 18;
const eveningPages = 25;
const totalPagesRead = morningPages + eveningPages;

console.log("2. Total pages read:", totalPagesRead);


// Question 3
const mondayItems = 125;
const tuesdayItems = 178;
const totalItemsSold = mondayItems + tuesdayItems;

console.log("3. Total items sold:", totalItemsSold);



// 2. Subtraction (-)


// Question 1
const totalSeats = 80;
const occupiedSeats = 53;
const emptySeats = totalSeats - occupiedSeats;

console.log("1. Empty seats:", emptySeats);


// Question 2
const originalMarks = 500;
const lostMarks = 35;
const finalMarks = originalMarks - lostMarks;

console.log("2. Final marks:", finalMarks);


// Question 3
const totalBoxes = 2500;
const sentBoxes = 875;
const remainingBoxes = totalBoxes - sentBoxes;

console.log("3. Remaining boxes:", remainingBoxes);



// 3. Multiplication (*)


// Question 1
const notebookPrice = 45;
const numberOfNotebooks = 8;
const notebookCost = notebookPrice * numberOfNotebooks;

console.log("1. Cost of 8 notebooks:", notebookCost);


// Question 2
const bottlesPerHour = 120;
const numberOfHours = 6;
const totalBottles = bottlesPerHour * numberOfHours;

console.log("2. Total bottles produced:", totalBottles);


// Question 3
const numberOfRows = 7;
const plantsPerRow = 15;
const totalPlants = numberOfRows * plantsPerRow;

console.log("3. Total plants:", totalPlants);



// 4. Division (/)


// Question 1
const totalPencils = 144;
const numberOfStudents = 12;
const pencilsPerStudent = totalPencils / numberOfStudents;

console.log("1. Pencils per student:", pencilsPerStudent);


// Question 2
const distanceTravelled = 360;
const travelTime = 6;
const averageDistancePerHour = distanceTravelled / travelTime;

console.log("2. Average distance per hour:", averageDistancePerHour, "km");


// Question 3
const totalAmount = 72000;
const numberOfDepartments = 9;
const amountPerDepartment = totalAmount / numberOfDepartments;

console.log("3. Amount per department:", amountPerDepartment);



// 5. Modulus (%)


// Question 1
const totalStudents = 53;
const groupSize = 5;
const studentsLeftOver = totalStudents % groupSize;

console.log("1. Students left over:", studentsLeftOver);


// Question 2
const totalCandies = 128;
const candiesPerBox = 10;
const unpackedCandies = totalCandies % candiesPerBox;

console.log("2. Candies left unpacked:", unpackedCandies);


// Question 3
const number = 17;
const remainder = number % 2;

if (remainder === 0) {
    console.log("3. The number is even.");
} else {
    console.log("3. The number is odd.");
}



// 6. Exponentiation (**)


// Question 1
const side = 6;
const cubeVolume = side ** 3;

console.log("1. Volume of cube:", cubeVolume, "cm³");


// Question 2
const initialBacteria = 1;
const hours = 4;
const bacteriaAfterFourHours = initialBacteria * (2 ** hours);

console.log("2. Bacteria after 4 hours:", bacteriaAfterFourHours);


// Question 3
const cellsPerSide = 9;
const totalCells = cellsPerSide ** 2;

console.log("3. Total cells:", totalCells);

