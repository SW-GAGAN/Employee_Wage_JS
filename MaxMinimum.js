let number1 = Math.floor((Math.random()*10000));
let number2 = Math.floor((Math.random()*10000));
let number3 = Math.floor((Math.random()*10000));
let operation1= number1 + number2 * number3;
let operation2= number1 % number2.toFixed() +number3;
let operation3= number3 + number1 / number2;
let operation4= number1 * number2 + number3;
let max=0,min=0;
if( operation1 > operation2 && operation1 > operation3 && operation1 > operation4 ){
    max = operation1;
}

else if( operation2 > operation3 && operation2 > operation4 ){
    max = operation2;
}
else if( operation3 > operation4 ){
    max = operation3;
}
else{
    max=operation4;
}
if( operation1 < operation2 && operation1 < operation3 && operation1 < operation4 ){
    min = operation1;
}

else if( operation2 < operation3 && operation2 < operation4 ){
    min = operation2;
}
else if( operation3 < operation4 ){
    min = operation3;
}
else{
    min=operation4;
}