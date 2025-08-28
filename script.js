//1-masala
let products = [
    {id: 6, name: 'smartphone', price: 12000, rating: 4.5, discount: 20},
    {id: 2, name: 'acer', price: 10000, rating: 4.3, discount: 10},
    {id: 1, name: 'Macbook', price: 17000, rating: 4.7, discount: 40},
    {id: 4, name: 'HP', price: 21000, rating: 4.1, discount: 30},
    {id: 5, name: 'DELL', price: 35000, rating: 4.9, discount: 30}

];
let sortByRating = [...products].sort((a, b) => b.rating - a.rating);
let bestProducts = sortByRating[0];

console.log("Rating buyicha saralangan:", sortByRating);
console.log("Eng yuqori ratingga ega product:", bestProducts);


//2-masala
const product = [
    {id: 1, name: 'Phone'},
    {id: 2, name: 'Laptop'},
    {id: 3, name: 'Tablet'},
    {id: 4, name: 'Smart Watch'},
];
function getProdectNameById(id) {
    const produc = product.find(item => item.id === id);
    return produc ? product.name : 'Topilmadi';
}

console.log(getProdectNameById(1));
console.log(getProdectNameById(2)); 
console.log(getProdectNameById(3));
console.log(getProdectNameById(5));

//3-masala
let arr = [1, 2, 3, 2, 4, 3, 5, 1, 6];
let iniqueArr = arr.reduce ((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
} , []);
console.log(iniqueArr);

