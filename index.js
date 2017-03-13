const products = [
  { name: 'Head & Shoulders Shampoo', standardPrice: 4.99, discount: .6 },
  { name: 'Twinkies', standardPrice: 7.99, discount: .45 },
  { name: 'Oreos', standardPrice: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', standardPrice: 13.99, discount: .7 },
]

function getTotalAmountForProducts(products){
	let totalPrice = 0;

	products.forEach(product => {
		if (product.discount >= .5){
			totalPrice += product.standardPrice;
		}
	});

	return totalPrice;
}

console.log(getTotalAmountForProducts(products))

////////////////////

function getTotalAmountForProducts(products, callback) {
  let totalPrice = 0;
 
  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });
 
  return totalPrice;
}
 
function callback(totalPrice, product) {
  if (product.discount >= .5) {
    return totalPrice + product.standardPrice;
  }
  return totalPrice;
}
 
console.log(getTotalAmountForProducts(products, callback));

////////////////////

function reduce(collection, callback, initialValue) {
  let result = initialValue;
 
  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });
 
  return result;
}

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
];

function couponCounter(totalAmount, location){
	return totalAmount + location.amount;
}

console.log(reduce(couponLocations, couponCounter, 0));

//////////////////////Inbuilt JS function////////

console.log(couponLocations.reduce(couponCounter, 0));
