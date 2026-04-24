// Write the function to return the count of the number (i.e. length)
const countDigits = (number) => {
  return Math.abs(number).toString().length;
};

console.log(countDigits(234));
console.log(countDigits(0));
console.log(countDigits(-8980));



// Using while loop
const countDigitLongway = (number) => {
  let count = 0;
  // Handle negative case
  number = Math.abs(number);

  // Handle 0 case
  if (number === 0) {
    return 1;
  }

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  console.log(count);
  return count;
};

countDigitLongway(23489);
console.log(countDigitLongway(0));