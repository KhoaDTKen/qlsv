// Destructuring object
const person = { name: "Duyngu", age: 30}; 
const { name, age} = person; // Lay ra các thuộc tính name và age từ object
console.log(name); // "John" 
console.log(age); // 30

// Destructuring array
const numbers = [1, 2, 3];
const [first, second] = numbers; // Lấy ra giá trị đầu tiên và thứ hai của máng
console.log(first); // 1 
console.log(second); // 2