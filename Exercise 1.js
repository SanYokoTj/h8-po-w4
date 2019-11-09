Exercise 1: Logic Challenge - Angka Prima

function angkaPrima(angka) {
var hasil = true;
  
  for(var i = 2; i < angka; i++) {
    if (angka % i === 0) {
      hasil = false;
    }
  }
  return hasil;
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));