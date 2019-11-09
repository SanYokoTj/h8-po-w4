Exercise 7: Logic Challenge - Urutkan Abjad

function urutkanAbjad(str) {
   
    var tampung = [];
    for (let i = 0; i < str.length; i++) {
        tampung.push(str[i]);
    }

    for (let i = 0; i < tampung.length; i++) {
        for (let j = 0; j < tampung.length; j++) {
        if (tampung[j] > tampung[j + 1]) {
            abc = tampung[j];
            tampung[j] = tampung[j + 1];
            tampung[j + 1] = abc;
        }
        }
    }

    return tampung.join('');
}

console.log(urutkanAbjad('hello')); 
console.log(urutkanAbjad('truncate')); 
console.log(urutkanAbjad('developer')); 
console.log(urutkanAbjad('software')); 
console.log(urutkanAbjad('aegis')); 
