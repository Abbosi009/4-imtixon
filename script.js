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


//4-masala
let users = [

        { name: "Abdulaziz", age: 33, },
        { name: "Erkin", age: 22, },
        { name: "Temur", age: 34, },
        { name: "Sardor", age: 20,},
]
 let updatedUsers = users.map(user => {
    return {
        ...user,
        isMarried: user.age >= 25 ? true : false
    };
});
console.log(updatedUsers);

//5-masala
const books = [
    {
        title: "Halqa",
        author: "Akrom Malik",
        alreadyRead: false,
    },
    {
        title: "Dunyo ishlari",
        author: "O'tkir Hoshimov",
        alreadyRead: true,
    },
    {
        title: "Vaqtning qadri",
        author: "Abdulfattoh Abu G'udda",
        alreadyRead: false,
    },
];
books.forEach((book, index) => {
    let status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
    console.log(
        `${index + 1}. "${book.title}" - ${book.author} - ${status}`
    );
    
})

//6-masala
const toriJovoblar = {
    1: "B", 2: "A", 3: "C", 4: "D", 5: "B",
    6: "C", 7: "A", 8: 'D', 9: "A", 10: "B"
}
const AbdulazizJovoblar = {
    1: "C", 2: "A", 3: "D", 4: "D", 5: "B",
    6: "C", 7: "B", 8: "C", 9: "A", 10: "C"
}

let Togri = 0;
let Notogri = 0;

for (let key in toriJovoblar) {
    if (toriJovoblar[key] === AbdulazizJovoblar[key]) {
        Togri++;
    } else {
        Notogri++;
    }
}
console.log(`To'g'ri javoblar soni: ${Togri}`);
console.log(`Noto'g'ri javoblar soni: ${Notogri}`);

// 7-masala

String.prototype.count = function (char) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
};

// Test
let str = "Abdulaziz Programmer";
let char = "a";
console.log(str.count(char)); // 2

// 8-masala
function Productt(name, company, price, discount) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.discount = discount || 0;

    Productt.prototype.getInfo = function () {
        if (this.discount > 0) {
            let newPrice = this.price - (this.price * this.discount / 100);
            console.log(`${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$ Aksiyadagi narxi esa ${newPrice}$.`);
        } else {
            console.log(`${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiya mavjud emas!`);

}}}

let p1 = new Productt("iPhone 14", "Apple", 1200, 10);
let p2 = new Productt("Galaxy S23", "Samsung", 1000);

p1.getInfo();
p2.getInfo();

// 9-masala
function Employee(name, salary, workName) {
    this.name = name;
    this.salary = salary;
    this.workName = workName;
}

Employee.prototype.increaseSalary = function (percent) {
    let newSalary = this.salary + (this.salary * percent / 100);
    return newSalary;
};
let emp1 = new Employee("Abdulaziz", 1500, "Google");
console.log(emp1.increaseSalary(10));

//10-masala
function getTopProducts(products, n) {
    return products
        .sort((a, b) => b.price - a.price)
        .slice(0, n)
        .map(product => product.name);
}

const producct =[
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 150 },
    { id: 4, name: "Product D", price: 300 },
    { id: 5, name: "Product E", price: 250 },
    { id: 6, name: "Product F", price: 50 },
    { id: 7, name: "Product G", price: 400 },
    { id: 8, name: "Product H", price: 350 },
    { id: 9, name: "Product I", price: 450 },
]
let n = 3;
console.log(getTopProducts(producct, n)); 