Exercise 3: Logic Challenge - Mencari Median

function cariMedian(arr) {
  var panjangNilai = arr.length
  if(panjangNilai % 2 != 0) {
    var median = Math.floor(panjangNilai / 2)
    return arr[median]
  }

  else {
    var angka1 = panjangNilai / 2
    var angka2 = (panjangNilai / 2) - 1
    var median = (arr[angka1] + arr[angka2]) / 2
    return median
  }
}

console.log(cariMedian([1, 2, 3, 4, 5])); 
console.log(cariMedian([1, 3, 4, 10, 12, 13])); 
console.log(cariMedian([3, 4, 7, 6, 10])); 
console.log(cariMedian([1, 3, 3])); 
console.log(cariMedian([7, 7, 8, 8])); 