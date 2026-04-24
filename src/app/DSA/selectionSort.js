// Selection sort
// You select the lowest and place it in the front.

const selectionSort = (a) => {
  const n = a.length;
  // If n-1 is sorted that n element will already be sorted, thats why n-1.
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
};

console.log(selectionSort([3, 7, 9, 1, 2]));