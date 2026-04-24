// Insertion sort

const insertionSort = (a) => {
  const n = a.length;
  for (let i = 1; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;
    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = curr;
  }
  return a;
};

console.log(insertionSort([3, 4, 7, 1, 2]));