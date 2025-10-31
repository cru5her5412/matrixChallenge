//TODO: add comments to anywhere i missed
//TODO: fix 2x2 matrix inversion(seems to not work idk why yet)
let angleMode: "DEGREE" | "RADIAN" = "DEGREE";
const PI = Math.PI; //added to simplify manual input of angle
const inputArray01: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // [10, 11, 12],
]; //added clarification here
const inputArray02: number[][] = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]; //added clarification here
const inputArray03: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]; //added clarification here
const inputArray04: number[][] = [
  [16, 15, 14, 13],
  [12, 11, 10, 9],
  [8, 7, 6, 5],
  [4, 3, 2, 1],
]; //added clarification here
const inputArray05: number[][] = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]; //added clarification here
const inputArray06: number[][] = [
  [25, 24, 23, 22, 21],
  [20, 19, 18, 17, 16],
  [15, 14, 13, 12, 11],
  [10, 9, 8, 7, 6],
  [5, 4, 3, 2, 1],
]; //added clarification here
const inputArray07: number[][] = [
  [1, 3 / 2],
  [-1, 1],
];
const inputArray08: number[][] = [
  [21, 21, 21],
  [0, 0, 21],
  [0, 21, 21],
];
const inputArray09: number[][] = [[2], [10]];
const inputArray010: number[][] = [
  [2 / 5, -3 / 5],
  [2 / 5, 2 / 5],
];
const identityMatrix: number[][] = [
  [1, 0],
  [0, 1],
];
const inputArray011: number[][] = [
  [0, 1],
  [1, 0],
];
const inputArray012: number[][] = [
  [4, 1, 3],
  [3, 2, 2],
  [1, 4, 5],
];
const inputArray013: number[][] = [
  [8, 5],
  [8, 1],
];
const inputArray014: number[][] = [
  [31, 31, 32, 21, 2],
  [1, 4, 3, 1, 2],
  [5, 2, 32, 5, 2],
  [25, 52, 2, 1, 2],
  [2, 2, 2, 2, 2],
];
const inputArray015: number[][] = [
  [2, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 1],
]; //added clarification here
const inputArray016: number[][] = [
  [3, 6, 7, 8, 5, 7],
  [0, 5, 5, 8, 9, 5],
  [4, 4, 6, 7, 9, 0],
  [5, 7, 8, 0, 5, 7],
  [7, 5, 7, 8, 4, 4],
  [4, 3, 5, 0, 5, 4],
];
const inputArray017: number[][] = [
  [6, 7, 8],
  [10, 11, 12],
  [14, 15, 1],
];
const inputArray018: number[][] = [
  [5, 7, 8],
  [9, 11, 12],
  [13, 15, 1],
];

function matrixMultiplication(
  A: number[][],
  B: number[][],
  decimalPlaces: number
) {
  //added clarification here
  let output: number[][] = []; //added clarification here
  if (A[0].length != B.length) {
    throw "error, invalid matrices to multiply, remember the width of A must match the height of B";
  }
  for (let i = 0; i < A.length; i++) {
    output.push([]);
  }
  let pos = 0; //implicitly a number
  for (let i = 0; i < A.length; i++) {
    //row
    for (let j = 0; j < B[0].length; j++) {
      //column
      for (let k = 0; k < B.length; k++) {
        //position
        pos += A[i][k] * B[k][j];
      }
      output[i][j] =
        Math.round(pos * 10 ** decimalPlaces) / 10 ** decimalPlaces; //set value of output array at position calculated to value calculated(rounded to 6 decimal places)
      pos = 0;
    }
    pos = 0;
  }
  return output;
}
function matrixDeterminant(A: number[][]) {
  if (A.length != A[0].length) {
    throw "This array's determinant cannot be calculated or doesn't exist. Remember only square matrices have a determinant!";
  } //error
  let detA: number = 0;

  if (A.length == 2 || A.length == 3) {
    detA = matrix2x2or3x3xDeterminant(A);
    return detA; //end result
  } else {
    for (let s = 0; s < A.length; s++) {
      let tempMatrix: number[][] = []; //temp array to store n-1xn-1 submatrix
      let x = 0;
      let y = s; // position to delete row and column of
      let tempMatrixI: number[][] = []; //second temp variable needed due to array issues (or skill issue)
      tempMatrix = A.slice(1, A.length); //get all rows starting at index 1(2nd row) aka remove top row
      for (let i = 0; i < A.length - 1; i++) {
        tempMatrixI[i] = tempMatrix[i].toSpliced(s, 1); //remove value corresponding to that in the column to remove
      }
      if ((s + 1) % 2 == 0) {
        detA -= matrixDeterminant(tempMatrixI) * A[0][s]; //if even, subtract (reuses current function for smaller matrix, to resolve the determinant)
      } else {
        detA += matrixDeterminant(tempMatrixI) * A[0][s]; //if odd, add (reuses current function for smaller matrix, to resolve the determinant)
      }
    }
    return detA;
  }
}

function matrix2x2or3x3xDeterminant(A: number[][]) {
  let detA: number = 0;
  let detAi: number[] = []; //first half of determinant(leading diagonal)
  let detAii: number[] = []; //second half of determinant (non-leading diagonal)

  let iterationCount: number; //needed due to 2x2 matrix having a difference in method (n-1 instead of n)
  if (A.length == 2) {
    iterationCount = 1;
  } else {
    iterationCount = 3;
  }
  //2x2 and 3x3
  for (let s = 0; s < iterationCount; s++) {
    detAi.push(1);
    detAii.push(1);
    //iterates based on size of matrix(any where n!=2 iterationCount = n, when n=2, iterationCount=1)
    let x = 0;
    let y = s; //starts with top row then works diagonally from there(e.g. 0,0 0,1 0,2 etc)
    for (let i = 0; i < A.length; i++) {
      if (y >= A.length) {
        //if out of array, loop to start
        y = 0;
      }
      detAi[s] = detAi[s] * A[x][y]; //multiply initial/previous value by current one
      x++; //increment down one
      y++; //increment across one
    }
    let xi = 0;
    let yi = A.length - (1 + s); //repeat process above but for other set of diagonals(due to 2x2, starts in top right instead of top left)
    for (let i = 0; i < A.length; i++) {
      if (yi < 0) {
        yi = A.length - 1; //if at end  of array, loop to end
      }
      detAii[s] = detAii[s] * A[xi][yi]; //multiply initial/previous value by current one
      xi++; //move down one
      yi--; //move left one
    }
  }
  let temp: number = 0;
  let temp2: number = 0;

  for (let i = 0; i < iterationCount; i++) {
    temp += detAi[i]; //sum all leading diagonals
    temp2 += detAii[i]; //sum all non-leading diagonals
  }
  detA = temp - temp2; //calculate determinant
  return detA; //return value
}
function matrixInverse(A: number[][], decimalPlaces: number) {
  let detA: number | undefined = matrixDeterminant(A);
  if (detA == undefined) {
    throw "error, can't calculate that yet or determinant threw error";
  }
  if (A.length != A[0].length) {
    throw "error, matrix must be square to be inverted";
  } else if (detA == 0) {
    throw "error, matrix must have a non-zero determinant to be inverted";
  }
  let inverseMatrix: number[][] = [];
  for (let i = 0; i < A.length; i++) {
    inverseMatrix.push([]); //fill array with empty arrays for each of the rows in the matrix
  }
  let calcMatrix = A; //prevent splice etc from messing with the original array/matrix
  if (calcMatrix.length == 2) {
    let Last: number = calcMatrix[1][1]; //last element in matrix
    let First = calcMatrix[0][0]; //first element in matrix
    calcMatrix[0].splice(0, 1, Last); //replace first with last
    calcMatrix[1].splice(1, 1, First); //replace last with first
    calcMatrix[0][1] = A[0][1] === 0 ? A[0][1] : -A[0][1]; //invert sign of top left
    calcMatrix[1][0] = A[1][0] === 0 ? A[1][0] : -A[1][0]; //invert sign of bottom right
    inverseMatrix = calcMatrix.map((row) =>
      row.map((num) => {
        //preform multiplication on every element (multiply by 1/detA and round to 6 decimal places)
        let temp = num * (1 / detA);
        temp = Math.round(temp * 10 ** decimalPlaces) / 10 ** decimalPlaces;
        return temp;
      })
    );
  } else {
    //for any case other than 2x2 (different logic)
    let row: number = 0;
    let column: number = 0;
    for (let s = 0; s < calcMatrix.length ** 2; s++) {
      let tempArray: number[][] = [];
      for (let x = 0; x < calcMatrix.length - 1; x++) {
        tempArray.push([]);
      } //process above creates an empty 'matrix' with n-1 rows
      let tx = 0;
      let ty = 0;
      //note: different method used here for removing a row and column compared to when i did it for determinant due to me forgetting this was a step for inversion(oops)
      calcMatrix.forEach((rows, i) => {
        rows.forEach((cols, j) => {
          if (i == row || j == column) {
            //if value is from row or column being removed do nothing
          } else {
            //else add them to the new array at the correct position
            tempArray[tx][ty] = cols;
            ty++;
            if (ty >= tempArray.length) {
              ty = 0;
              tx++;
            }
          }
        });
      });
      //fill temp array with values from undergoing removal of column and row of given row/column
      if (calcMatrix.length % 2 !== 0) {
        defaultInversionLogic(
          s,
          inverseMatrix,
          column,
          row,
          tempArray,
          A,
          -1,
          1,
          decimalPlaces
        );
      } else {
        if (row % 2 == 0 || row == 0) {
          //extra code added due to alternating rows in even dimensioned matrices requiring different signs(duplicate of prior with swapped signs, and logic to filter out each row based on how they need to be signed)
          defaultInversionLogic(
            s,
            inverseMatrix,
            column,
            row,
            tempArray,
            A,
            -1,
            1,
            decimalPlaces
          );
        } else {
          defaultInversionLogic(
            s,
            inverseMatrix,
            column,
            row,
            tempArray,
            A,
            1,
            -1,
            decimalPlaces
          );
        }
      }
      //values added to final array are also rounded to 6 decimal places
      column++; //each iteration increment column
      if (column > calcMatrix.length - 1) {
        //if column is outside of array, increment row and reset back to leftmost column
        row++;
        column = 0;
      }
    }
  }
  //create identity matrix matching input size
  let I: number[][] = [];
  for (let i = 0; i < A.length; i++) {
    I.push([]);
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (i == j) {
        I[i][j] = 1;
      } else {
        I[i][j] = 0;
      }
    }
  }
  let inversionTest: number[][] = matrixMultiplication(A, inverseMatrix, 0);
  console.log(inversionTest);
  console.log(I);
  if (I != inversionTest) {
    throw "error, inverted matrix was incorrect";
  } else {
    return inverseMatrix;
  }
  return inverseMatrix;
}
function defaultInversionLogic(
  s: number,
  inverseMatrix: number[][],
  column: number,
  row: number,
  tempArray: number[][],
  A: number[][],
  a: number,
  b: number,
  decimalPlaces: number
) {
  if (s % 2 != 0 && s != 0) {
    //if odd position in array, value is -ve (when going through row by row, column by column, every other value should be -ve)
    inverseMatrix[column][row] =
      Math.round(
        (matrixDeterminant(tempArray) / matrixDeterminant(A)) *
          10 ** decimalPlaces
      ) /
        10 ** decimalPlaces ===
      0
        ? 0
        : (a *
            Math.round(
              (matrixDeterminant(tempArray) / matrixDeterminant(A)) *
                10 ** decimalPlaces
            )) /
          10 ** decimalPlaces;
  } else if (s % 2 == 0 || s == 0) {
    //if even position in array, value is +ve
    inverseMatrix[column][row] =
      Math.round(
        (matrixDeterminant(tempArray) / matrixDeterminant(A)) *
          10 ** decimalPlaces
      ) /
        10 ** decimalPlaces ===
      0
        ? 0
        : (b *
            Math.round(
              (matrixDeterminant(tempArray) / matrixDeterminant(A)) *
                10 ** decimalPlaces
            )) /
          10 ** decimalPlaces;
  }
}
function matrixTrace(A: number[][]) {
  let trace: number = 0;
  for (let i = 0; i < A.length; i++) {
    trace += A[i][i];
  }
  return trace;
}
function createRotationMatrix(angle: number) {
  let newAngle: number; //new angle to use
  if (angleMode == "DEGREE") {
    //if angleMode is set to degrees, convert angles to radians(Math functions use them by default)
    newAngle = (angle * PI) / 180; //converting degrees to radians
  } else {
    newAngle = angle; //if not set to degrees, leave as angle given
  }
  let rotateMatrix: number[][] = [
    [
      Math.round(Math.cos(newAngle) * 1000000000) / 1000000000,
      Math.round(Math.sin(newAngle) * 1000000000) / 1000000000,
    ],
    [
      Math.round(Math.sin(newAngle) * 1000000000) / 1000000000,
      Math.round(Math.cos(newAngle) * 1000000000) / 1000000000,
    ],
  ]; //create rotation matrix based on formula from wikipedia, rounded to 6 decimal places
  return rotateMatrix;
}
function rotateMatrix(angle: number, matrixToRotate: number[][]) {
  if (matrixToRotate.length > 2 || matrixToRotate[0].length > 2) {
    throw "error, matrix is too large to rotate with a rotation matrix (2x1 or 2x2)";
  }
  let rotationMatrix = createRotationMatrix(angle); //use function above to create rotation matrix
  console.log(angle);
  let rotatedMatrix = matrixMultiplication(rotationMatrix, matrixToRotate, 6); //multiply rotation matrix with matrixToRotate
  return rotatedMatrix;
}
// console.log(matrixDeterminant(inputArray07)); //find determinant of 2x2
// console.log(matrixDeterminant(inputArray02)); //find determinant of 3x3
// console.log(matrixDeterminant(inputArray015)); //find determinant of 4x4
// console.log(matrixDeterminant(inputArray014)); //find determinant of 5x5
// console.log(matrixDeterminant(inputArray016)); //find determinant of 6x6
// console.log(matrixMultiplication(inputArray07, inputArray013)); //multiply 2x2 and 2x2
// console.log(matrixMultiplication(inputArray01, inputArray02)); //multiply 3x3 and 3x3
// console.log(matrixMultiplication(inputArray03, inputArray04)); //multiply 4x4 and 4x4
// console.log(matrixMultiplication(inputArray05, inputArray06)); //multiply 5x5 and 5x5
// console.log(matrixMultiplication(inputArray016, inputArray016)); //multiply 6x6 and 6x6
// console.log(matrixInverse(inputArray07, 6)); //invert 2x2
// console.log(matrixInverse(inputArray08,6)); //invert 3x3
// console.log(matrixInverse(inputArray015,6)); //invert 4x4
// console.log(matrixInverse(inputArray014,6)); //invert 5x5
// console.log(matrixInverse(inputArray016,6)); //invert 6x6
// console.log(createRotationMatrix(180)); //rotation matrix for PI radians/180 degrees. value depends on angleMode
// console.log(rotateMatrix(180, [[12], [32]])); //rotate coords 12,32 PI radians/ 180 degrees around the origin/0,0 first value depends on angleMode
console.log(
  matrixMultiplication(matrixInverse(inputArray08, 6), inputArray08, 0)
);
