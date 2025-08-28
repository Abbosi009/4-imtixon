//1-masala
let products = [
    {id: 6, name: 'smartphone', price: 12000, rating: 4.5, discount: 20},
    {id: 2, name: 'acer', price: 10000, rating: 4.3, discount: 10},
    {id: 1, name: 'Macbook', price: 17000, rating: 4.7, discount: 40},
    {id: 4, name: 'HP', price: 21000, rating: 4.1, discount: 30},
    {id: 5, name: 'DELL', price: 35000, rating: 4.9, discount: 30}

]
let sortedByRating = [...products].sort((a, b) => b.rating - a.rating)
let bestProducts = sortByRating[0]

console.log("Rating buyicha saralangan:", sortedByRating);
console.log("Eng yuqori ratingga ega product:", bestProducts);
