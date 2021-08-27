let number = Math.floor((Math.random() * 7));
let day = "";
if (number <= 6) {
    if (number == 0) {
        day = "monday";
    }
    else if (number == 1) {
        day = "tuesday";
    }
    else if (number == 2) {
        day = "wednesday";
    }
    else if (number == 3) {
        day = "thursday";
    }
    else if (number == 4) {
        day = "friday";
    }
    else if (number == 5) {
        day = "saturday";
    }
    else if (number == 6) {
        day = "sunday";
    }

}