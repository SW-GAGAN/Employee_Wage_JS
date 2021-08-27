let number = Math.floor((Math.random() * 1000000));
console.log(number);
let place = 0;
while ((number > 1 && number < 999999999)) {
    let num = (number % 10).toFixed();
    let output = "";
    place = place + 1
    if (place == 1) {
        output = num + " in units";
    } else if (place == 2) {
        output = num + " in tens place";
    } else if (place == 3) {
        output = num + " in hundreds place";

    } else if (place == 4) {
        output = num + " in thousand place";
    } else if (place == 5) {
        output = num + " in ten thousand place";
    } else if (place == 6) {
        output = num + " in lakh place";
    } else if (place == 7) {
        output = num + " in ten lakh place";
    } else if (place == 8) {
        output = num + " in crore place";
    } else {
        output = num + " in ten_crore place";
    }
    number = number / 10;
    console.log(output);
}

