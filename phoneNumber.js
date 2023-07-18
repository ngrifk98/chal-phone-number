/* Write a js function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      throw new Error("Array must contain exactly 10 integers.");
    }
  
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
  
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  // Usage:
  const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  console.log(phoneNumber); // Output: "(123) 456-7890"
  