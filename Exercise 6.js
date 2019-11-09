Exercise 6: Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    var digit = 0;
    var minDigit = 0;
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            digit = i.toString().length + (angka / i).toString().length;
        }
        if (minDigit === 0 || digit < minDigit) {
            minDigit = digit;
        }
    }
    return minDigit;
}

console.log(digitPerkalianMinimum(24)); 
console.log(digitPerkalianMinimum(90)); 
console.log(digitPerkalianMinimum(20)); 
console.log(digitPerkalianMinimum(179)); 
console.log(digitPerkalianMinimum(1)); 