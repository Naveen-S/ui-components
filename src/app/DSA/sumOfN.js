// Recursive way to find sum of n numbers

const sum = (num) => {
  if (num === 0) return 0;
  return num + sum(num - 1);
};

console.log(sum(5));
console.log(sum(7));