// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (originalString) => {
    
    if (typeof originalString === 'string') {
        const length = originalString.length;
        let reversedString = '';

        for (let i = length - 1; i >= 0; i--) {
            reversedString += originalString[i];
        }
        return reversedString;
    }else{
        return 'Please provide a string'
    }

    
}
// console.log(reverseString('12563'));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumber = (numberArray) => {
    const arrLength = numberArray.length;

    if(Array.isArray(numberArray) && arrLength > 0) {
        let total = 0;

        numberArray.forEach( element => {
            if(element > 0 && typeof element === 'number'){
                total += element;
            }         
        });
        return total;
    }else{
        return 'Please provide a array of numbers'
    }
}
const arr = [10,-5,10,20,-30,20,25,-100,10,'10'];

// console.log(sumOfPositiveNumber(arr));

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; 
    }
  
    const myObj = {};
    let mostFreqElm = arr[0];
    let maxCount = 1;
  
    for (const element of arr) {
      if (myObj[element]) {
        // console.log(myObj[element]);
        myObj[element]++;
      } else {
        myObj[element] = 1;
      }
  
      if (myObj[element] > maxCount) {
        mostFreqElm = element;
        maxCount = myObj[element];
      }
    }
  
    return mostFreqElm;
  }
  
  const myArray =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = mostFrequentElement(myArray);
//   console.log("The most frequent element is:", mostFrequent);
  

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbers(sortedArray, targetValue) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];

    if (currentSum === targetValue) {
      return [left, right];
    } else if (currentSum < targetValue) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}


const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

// console.log(findTwoNumbers(sortedArray, targetValue));
 

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Cannot divide by zero";
      }
    default:
      return "Error: Invalid operator";
  }
}

const number1 = 10;
const number2 = 5;
const operator = '+';

// console.log(calculator(number1, operator, number2));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(length) {

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  const passwordArray = [];

  // Add at least one character from each character set
  passwordArray.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
  passwordArray.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
  passwordArray.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
  passwordArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);

  // Fill the remaining password with random characters
  const remainingLength = length - passwordArray.length;
  for (let i = 0; i < remainingLength; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    passwordArray.push(randomChar);
  }

  // Shuffle the password characters
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
}

const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);

// console.log(randomPassword);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumber) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    const currentNumber = romanNumbers[romanNumber[i]];
    const nextNumber = romanNumbers[romanNumber[i + 1]];

    if (nextNumber > currentNumber) {
      result += nextNumber - currentNumber;
      i++; 
    } else {
      result += currentNumber;
    }
  }

  return result;
}

const romanNumber = "XXI";
// console.log(romanToInt(romanNumber));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(arr) {

  if (arr.length < 2) {
    return("The array must have at least two elements.");
  }

  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num !== firstSmallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return("There is no second smallest element in the array.");
  }

  return secondSmallest;
}

const numbersArray = [5, 2, 8, 1, 10, 3];
const result = findSecondSmallest(numbersArray);

// console.log(result); 








