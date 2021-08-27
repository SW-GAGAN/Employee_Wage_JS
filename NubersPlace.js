let number = Math.floor((Math.random() * 1000000));
console.log(number);
let place = 0;
while ((number > 1 && number < 999999999)) {
    let num = parseInt(number % 10);
    let output = "";
    place = place + 1
    switch (place) {
        case 1:
            output = num + " in units";
            break;
        case 2:
            output = num + " in tens place";
            break;
        case 3:
            output = num + " in hundreds place";
            break;
        case 4:
            output = num + " in thousand place";
            break;
        case 5:
            output = num + " in ten thousand place";
            break;
        case 6:
            output = num + " in lakh place";
            break;
        case 7:
            output = num + " in ten lakh place";
            break;
        case 8:
            output = num + " in crore place";
            break;
        default:
            output = num + " in ten_crore place";
    }

    number = (number / 10);
    console.log(output);
}
