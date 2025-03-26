// array of object
const products = [
{ name:"xiaomi",brand:"xiaomi",price:3000,color:"Black"},
{ name:"samsumg",brand:"samsumg",price:3000,color:"Black"},
{ name:"apple1",brand:"apple",price:16000,color:"Black"},
{ name:"m2",brand:"xiaomi",price:3000,color:"Black"},
{ name:"oneplus10r",brand:"oneplus",price:3000,color:"Black"},
]
// returns the all the product price in an array using map
const result = products.map(product=>product.price)
console.log(...result)
// returns the all the product name in an array using map
const names = products.map(product=>product.name)
console.log(names)
// returns the all the product brand name in an array using map
const brand = products.map(brands=>brands.brand)
console.log(...brand)