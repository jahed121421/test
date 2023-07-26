// Task 1
function revStr(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
    return reversedString;
  }
  console.log(revStr("hello world"));
//   Task 2
function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }

  console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7] ));
// Task 3
  function findMostFrequentElement(arr) {
    if (arr.length === 0) {
      return null;
    }
    const elementCount = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (elementCount[element] === undefined) {
        elementCount[element] = 1;
      } else {
        elementCount[element]++;
      }
    }
    let mostFrequentElement = arr[0];
    let highestCount = elementCount[arr[0]];
    for (const element in elementCount) {
      if (elementCount[element] > highestCount) {
        mostFrequentElement = element;
        highestCount = elementCount[element];
      }
    }
  
    return mostFrequentElement;
  }
  console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
//  Task 4
function twoSumSortedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === target) {
          return [left, right];
      } else if (currentSum < target) {
          left++;
      } else {
          right--;
      }
  }

  return null;
}
const result = twoSumSortedArray([1, 3, 6, 8, 11, 15], 9);
console.log(result);

//  Task 5
function calculate(num1, operator, num2) {
  if (operator === '+') {
      return num1 + num2;
  } else if (operator === '-') {
      return num1 - num2;
  } else if (operator === '*') {
      return num1 * num2;
  } else if (operator === '/') {
      if (num2 === 0) {
          return("ERROR");;
      }
      return num1 / num2;
  } else {
      return("ERROR");;
  }
}
const num1 = 10;
const num2 = 5;
const operator = '+';
console.log(calculate(num1, operator, num2));
// Task 6
function generateRandomPassword(length) {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+={}[]|\:;"<>,.?/~';

  const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}
const passwordLength = 6;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
// Task 7
function romanToInt(romanNumeral) {
  const romanNumeralMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentRoman = romanNumeral[i];
      const currentValue = romanNumeralMap[currentRoman];

      if (currentValue < prevValue) {
          result -= currentValue;
      } else {
          result += currentValue;
      }

      prevValue = currentValue;
  }

  return result;
}
const romanNumeral1 = 'IX';
const romanNumeral2 = 'XXI';
console.log(romanToInt(romanNumeral1));
console.log(romanToInt(romanNumeral2));
// Task 8
function findSecondSmallest(arr) {
  if (arr.length < 2) {
      return("Array must contain at least two elements.");
  }

  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[1];
}

const numbersArray = [9, 1,6,9];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber);