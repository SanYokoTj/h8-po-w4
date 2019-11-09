Exercise 9: Logic Challenge - Check AB

function checkAB(num) {
var tampung = [];
	for (i = 0; i < num.length; i++) {
		for (j = 0; j < num[i].length; j++) {
			if (num[i] !== num[j]) {
tampung.push(num[i][j]);
			} 
			else {
				tampung.push(num[i]);
			}
		}
	}

var indexofB = tampung.indexOf('b');
var range1 = 0;
var range2 = num.length;
for (k = 0; k < tampung.length; k++) {
		if (tampung[k] === 'a') {
			range1 = Math.abs(indexofB - k);
if (range1 < range2) {
				range2 = range1;
			}
		}
	}

if (range2 === 4 || tampung[tampung.length - 5] === 'a') {
		return true;
	} 
	else {
		return false;
	}
}

console.log(checkAB('lane borrowed'));
console.log(checkAB('i am sick'));
console.log(checkAB('you are boring'));
console.log(checkAB('barbarian'));
console.log(checkAB('bacon and meat'));