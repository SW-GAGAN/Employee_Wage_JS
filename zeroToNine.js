let number = Math.floor((Math.random() * 10));
console.log(number);
let word = "";
switch (number) {
    case 0:
        word = "Zero";
        break;
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
    case 3:
        word = "Three";
        break;
    case 4:
        word = "Four";
        break;
    case 5:
        word = "Five";
        break;
    case 6:
        word = "Six";
        break;
    case 7:
        word = "Seven";
        break;
    case 8:
        word = "Eight";
        break;
    default:
        word = "Nine";
}
console.log(word);