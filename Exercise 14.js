Exercise 14: Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
rute = ['A', 'B', 'C', 'D', 'E', 'F'];
var biaya = 2000;
var tampung = [];
  
  if (arrPenumpang.length === 0) {
    return arrPenumpang;
  }
  
  for (i = 0; i < arrPenumpang.length; i++) {
    var penumpang = arrPenumpang[i];
    var objPenumpang = {};
    
    objPenumpang.penumpang = penumpang[0];
    objPenumpang.naikDari = penumpang[1];
    objPenumpang.tujuan = penumpang[2];
    objPenumpang.bayar = biaya * (rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.naikDari));
    
    tampung.push(objPenumpang);
  }
  
  return tampung;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));