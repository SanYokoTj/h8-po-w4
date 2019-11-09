Exercise 8: Logic Challenge - Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
  var kalimatKapital = '';
  
  for (var i = 0; i < kalimat.length; i++){
      kalimatKapital += kalimat[i] !== kalimat[i].toLowerCase() ? kalimat[i].toLowerCase() : kalimat[i].toUpperCase();
  }
  return kalimatKapital;
}

console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY'));
console.log(tukarBesarKecil('My Name is Bond!!'));
console.log(tukarBesarKecil('IT sHOULD bE me'));
console.log(tukarBesarKecil('001-A-3-5TrdYW'));