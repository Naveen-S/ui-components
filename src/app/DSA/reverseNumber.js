// Reverse integer

const reverseInteger = (n) => {
  let nCopy = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }
  const limit = Math.pow(2, 31);
  if (rev > limit - 1 || rev < -limit) {
    return 0;
  }
  return nCopy < 0 ? -rev : rev;
};