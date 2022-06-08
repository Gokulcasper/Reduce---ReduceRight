// Reduce  & Reduce Right

/*

// Reduce using Array

const shopitem = [34, 32, 54, 65, 43];
let AddShopItem = shopitem.reduceRight((previousval, currentval) => {
  console.log(previousval);
  console.log(currentval);
  return previousval + currentval;
});
console.log("Total Cart Items :", AddShopItem);

*/

// Reduce using Array Object

const cart_item = [
  { id: 1, item: "Android Phone", cost: 50 },
  { id: 2, item: "Laptop", cost: 70 },
  { id: 3, item: "Desktop", cost: 10 },
];
let totalValue = cart_item.reduce((accumulator, currentval) => {
  return accumulator + currentval.cost;
}, 0);
console.log("Your Total Amount is : ", totalValue);
