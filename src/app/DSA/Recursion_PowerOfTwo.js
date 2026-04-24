// Using recursion detect if a number is power of 2.

const powerOfTwo = (n) => {
  if (n === 1) return true;
  if (n % 2 !== 0 || n < 1) return false;
  return powerOfTwo(n / 2);
};

console.log(powerOfTwo(8));
console.log(powerOfTwo(24));
console.log(powerOfTwo(0.75));
