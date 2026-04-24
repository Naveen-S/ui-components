// Using recursion find the sum of all the elements in the array
const arr = [3, 7, 9, 4, 2];
const sumOfArray = (i) => {
  if (i === 0) return arr[0];
  // console.log(arr[i]);
  return arr[i] + sumOfArray(i - 1);
};

console.log(sumOfArray(4));