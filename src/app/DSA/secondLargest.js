// Find second largest element in an array

const secondLargest = (arr) => {
  if (arr.length < 2) return null;
  let largest = -Infinity;
  let larger = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(largest);
    console.log(larger);
    if (arr[i] > largest) {
      larger = largest;
      largest = arr[i];
    } else if (arr[i] > larger && arr[i] !== largest) {
      larger = arr[i];
    }
  }
  return larger;
};

console.log(secondLargest([4, 0, -9, 2, 8, -7, 1]));