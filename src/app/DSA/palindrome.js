// Check if a given number is a palindrome

const isPalindrome = (n) => {
  let nCopy = n;
  let rev = nCopy.toString().split('').reverse().join('');
  console.log(rev);
  return n.toString() === rev.toString();
};

console.log(isPalindrome(123));
console.log(isPalindrome(-123));
console.log(isPalindrome(121));


// Mathematically way
const isPalin = (n) => {
  let nCopy = n;
  if (n < 0) {
    return false;
  }
  let rev = 0;
  while (n > 0) {
    // Mod to get last digit.
    let rem = n % 10;
    // Divide to remove last digit.
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }
  return nCopy === rev;
};

console.log(isPalin(121));
console.log(isPalin(-121));
console.log(isPalin(1331));


// https://namastedev.com/practice/validate-palindrome

function validatePalindrome(n) {
  n = n.toLowerCase();
  n = n.replace(/[^a-zA-Z0-9]/g, '');
  console.log(n);
  if (n === '') {
    return true;
  }
  let nCopy = n;
  let rev = nCopy.toString().split('').reverse().join('');
  console.log(rev);
  return n.toString() === rev.toString();
}