// Bubble sort
// You bubble the largest number towards the end.
const bubbleSort = (a) => {
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      // If there is no swapping it means the array is sorted, so break the loop.
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return a;
};

console.log(bubbleSort([3, 7, 9, 1, 2]));