Exercise 12: Logic Challenge - Toko X

function countProfit(shoppers) {
	var listItem = [
		['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1],
	];
if (shoppers[0] === undefined) {
		return [];
	}
var shoes = {};
	var shoesShoppers = [];
	var shoesAmount = 0;
	var shoesLeft = listItem[0][2];
var shirt = {};
	var shirtShoppers = [];
	var shirtAmount = 0;
	var shirtLeft = listItem[1][2];
var sweater = {};
	var sweaterShoppers = [];
	var sweaterAmount = 0;
	var sweaterLeft = listItem[2][2];

var result = [];
for (i = 0; i < 5; i++) {
		for (j = 0; j < shoppers.length; j++) {
      if (i === 0) {
        shoes.product = listItem[i][0];
        if (shoppers[j].product === 'Sepatu Stacattu') {
					if (shoppers[j].amount <= shoesLeft && shoppers[j].amount > 0) {
						shoesShoppers.push(shoppers[j].name);
						shoesAmount = shoesAmount + shoppers[j].amount;
						shoesLeft = shoesLeft - shoppers[j].amount;
					}
				}
				shoes.shoppers = shoesShoppers;
				shoes.leftOver = shoesLeft;
				shoes.TotalProfit = listItem[0][1] * shoesAmount;
			} 
      else if (i === 1) {
        shirt.product = listItem[i][0];
        if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= shirtLeft && shoppers[j].amount > 0) {
						shirtShoppers.push(shoppers[j].name);
						shirtAmount = shirtAmount + shoppers[j].amount;
						shirtLeft = shirtLeft - shoppers[j].amount;
					}
				}
				shirt.shoppers = shirtShoppers;
				shirt.leftOver = shirtLeft;
				shirt.TotalProfit = listItem[1][1] * shirtAmount;
			} 
      else if (i === 2) {
				sweater.product = listItem[i][0];
        if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= sweaterLeft && shoppers[j].amount > 0) {
						sweaterShoppers.push(shoppers[j].name);
						sweaterAmount = sweaterAmount + shoppers[j].amount;
						sweaterLeft = sweaterLeft - shoppers[j].amount;
					}
				}
				sweater.shoppers = sweaterShoppers;
				sweater.leftOver = sweaterLeft;
				sweater.TotalProfit = listItem[2][1] * sweaterAmount;
			}
		}
	}
  result.push(shoes, shirt, sweater);
  return result;
}

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },	{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },	{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
	])
);
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 },	{ name: 'Lisa', product: 'Baju Zoro', amount: 1 }
	])
);
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }
])
);
console.log(countProfit([]));