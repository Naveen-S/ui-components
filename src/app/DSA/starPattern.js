// Star Pattern
/* 
n = 4

* * * *
* * * *
* * * *
* * * *

*/

const drawStars = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += ' * ';
    }
    console.log(row);
  }
};

drawStars(4);


/* 

n = 4
*
* *
* * *
* * * *

*/

const drawRightTriangleStarPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += ' * ';
    }
    console.log(row);
  }
};

drawRightTriangleStarPattern(4);

/* 

n = 5

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

const drawRightTriangleNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
};

drawRightTriangleNumbers(5);

/* 

n = 5

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/


const drawRightTriangleWithSameNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += `${i + 1} `;
    }
    console.log(row);
  }
};

drawRightTriangleWithSameNumbers(5);


/* 

n = 5

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

const drawNumberTriangleReverse = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};

drawNumberTriangleReverse(5);

/* 

n = 5
        *
      * *
    * * *
  * * * *
* * * * *

*/

const drawReverseRightAngle = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n - 1; j >= 0; j--) {
      if (j <= i) {
        row += '*';
      } else {
        row += '.';
      }
    }
    console.log(row);
  }
};

drawReverseRightAngle(5);


/* 

n = 5

1
1 0
1 0 1
1 0 1 0
1 0 1 0 1

*/

const drawOneZeroTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
  }
};
drawOneZeroTriangle(5);


/* 

n = 5

1
0 1
0 1 0
1 0 1 0
1 0 1 0 1

*/

const drawOneZeroTriangleWithOutToggleRefresh = (n) => {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
  }
};
drawOneZeroTriangleWithOutToggleRefresh(5);
