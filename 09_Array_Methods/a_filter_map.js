// FILTER METHOD - creates a new array containing elements based on the filter condition

const scores = [10, 30, 50, 20, 60, 5, 15, 45];

// this is non destructive, meaning it will not modify the original array
const modifiedScores = scores.filter( x => {
    return x > 20;
});

console.log(modifiedScores);

const users = [
    {name: "foo", premium: false},
    {name: "bar", premium: true},
    {name: "baz", premium: false},
    {name: "inte", premium: true},
];

const premiumUsers = users.filter( user => user.premium);

console.log(premiumUsers);

// MAP METHOD - creates a new array by applying a function to each element of the original array
// MAP METHOD 1
const prices = [10, 40, 30, 15, 20, 60];

const salePrices = prices.map( price => price/2 );

console.log(salePrices);


// MAP METHOD 2
const products = [
    {name: "gold star", price: 50},
    {name: "mushroom", price: 40},
    {name: "green shell", price: 20},
    {name: "banana peel", price: 10},
    {name: "red shell", price: 30}
];

const saleProducts = products.map( product => {
    if(product.price > 30){
        // product.price = product.price/2                          //This edits the original array, making this action destructive of the original array. We dont want this
        return { name: product.name, price: product.price/2 };      //This doesnt modify the original array
    }else{
        return product;
    }
});

console.log(saleProducts);