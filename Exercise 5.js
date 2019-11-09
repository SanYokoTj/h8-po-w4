Exercise 5: Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var nextHuruf = "";
    for (var i = 0; i < kata.length; i++) {
      for(var j = 0; j < huruf.length; j++) {
        if(kata[i] == huruf[j]) {
          nextHuruf += huruf[j+1];
        }
        }
    }
    return nextHuruf
  }

  console.log(ubahHuruf('wow')); 
  console.log(ubahHuruf('developer')); 
  console.log(ubahHuruf('javascript')); 
  console.log(ubahHuruf('keren')); 
  console.log(ubahHuruf('semangat')); 