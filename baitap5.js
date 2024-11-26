// Spread operator để sao chép và thêm phần tử vào array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 [1, 2, 3, 4, 5]
console.log(arr2);
// Spread operator trong object
const obj1 = { name: "Duyngu", age: 18 };
const obj2= {...obj1, location: "VN" }; // Sao chép obji và thêm thuộc tính location
console.log(obj2);
// Rest operator đề gom các phần tử
function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0); 
}
console.log(sum(1, 2, 3, 4)); // Kết quả: 10