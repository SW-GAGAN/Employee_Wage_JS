const prompt = require('prompt-sync')();
console.log('Please make a choise \n +1. Feet to Inch \n 2. Feet to Meter \n 3. Inch to Feet \n 4. Meter to Feet');
let number = parseInt(prompt());
let output = "";

switch (number) {
    case 1:
        var feet = parseInt(prompt("Enter the number in feet :"));
        var inches = feet * 12;
        output = (feet + " feets= " + inches + " inches");
        break;
    case 2:
        var feet = parseInt(prompt("Enter the number in feet:"));
        var meter = feet / 3.2808;
        output = (feet + " feets= " + meter + " meters");
        break;
    case 3:
        var inch = parseInt(prompt("Enter the number in inch:"));
        var feet = inch / 12;
        output = (inch + " inches= " + feet + " feet");
        break;
    case 4:
        var meter = parseInt(prompt("Enter the number in Meter:"));
        var feet = meter * 3.28;
        output = (meter + " meters= " + feet + " feet");
        break;
}