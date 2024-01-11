// 1-Berilgan massiv elementlari orasida qatnashgan sonlar yigindisini topuvchi funksiya yozing
console.log("1-masala");

let array = [10, 2, "salom", true, "xayr"];

function findSum(array) {
  let sum = 0;
  for (const value of array) {
    if (typeof value === "number") {
      sum += value;
    }
  }
  return sum;
}

console.log(findSum(array));

// 2- Berilgan yozuvning so'zlarini bosh harflarga almashtiradigan funksiya yozing
console.log("2-masala");

let string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit";

function capitalize(string) {
  let newOne = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === " ") {
      newOne += string[i].toUpperCase();
    } else {
      newOne += string[i];
    }
  }

  return newOne;
}

console.log(capitalize(string));

// 3-Ixtiyoriy yozuvni polindromlokka tekshiradigan funksiya yozing
console.log("3-masala");

let word = "Radar";

function isItPalindrome(word) {
  let reversedWord = word.toLowerCase().split("").reverse().join("");
  return reversedWord === word.toLowerCase()
    ? "This is a palindrome"
    : "This is not a palindrome";
}

console.log(isItPalindrome(word));

// 4-Obyektlardan iborat massiv beeilganda ular orasidan eng katta yoshlisini nomini chiqaradigan unksiya yozing
console.log("4-masala");

const users = [
  {
    id: 1,
    name: "John",
    age: 50,
  },
  {
    id: 2,
    name: "Bill",
    age: 45,
  },
  {
    id: 3,
    name: "Adam",
    age: 30,
  },
];
