Exercise 11: Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
if (memberId === undefined || memberId === '') {
  return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	} 
  else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
	}
var dataPerson = {};
dataPerson.memberId = memberId;
dataPerson.money = money;
var order = [
	'Sepatu Stacattu',
	'Baju Zoro',
	'Baju H&N',
	'Sweater Uniklooh',
	'Casing Handphone',
];
var isOrder = [];
	for (var i = 0; i < order.length; i++) {
		if (money >= 1500000) {
			isOrder.push(order[0]);
			money -= 1500000;
		} 
    else if (money >= 500000) {
      isOrder.push(order[1]);
		  money -= 500000;
		} 
    else if (money >= 250000) {
      isOrder.push(order[2]);
		  money -= 250000;
		}
    else if (money >= 175000) {
      isOrder.push(order[3]);
		  money -= 175000;
		}
    else if (money >= 50000) {
      isOrder.push(order[4]);
		  money -= 50000;
		  break;
			}
		}
		dataPerson.listPurchased = isOrder;
		dataPerson.changeMoney = money;
		return dataPerson;
	}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());