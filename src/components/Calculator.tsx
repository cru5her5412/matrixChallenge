import {
  addMatrix,
  matrixMultiplication,
  matrixDeterminant,
  matrixInverse,
  matrixTrace,
  createRotationMatrix,
  rotateMatrix,
  subtractMatrix,
} from "./matrixChallenge.ts";
export default function Calculator(Matrix1: string[][], Matrix2: string[][], num1:number, num2:number, angleMode: "DEGREE" | "RADIAN", operation: string) {
    let endValue:string[][]|number|string
    let calcMatrix1 = Matrix1.map(row => row.map(value => Number(value)))
    let calcMatrix2 = Matrix2.map(row => row.map(value => Number(value)))
if(operation === "matrixMultiplication"){
endValue = matrixMultiplication(calcMatrix1, calcMatrix2, 2).map(row => row.map(value => value.toString()))
}
if(operation === "matrixDeterminant"){
endValue = matrixDeterminant(calcMatrix1)
}
if(operation === "matrixInverse"){
endValue = matrixInverse(calcMatrix1, 2).map(row => row.map(value => value.toString()))
}
if(operation === "matrixTrace"){
endValue = matrixTrace(calcMatrix1)
}
if(operation === "createRotationMatrix"){
endValue = createRotationMatrix(num1, angleMode).map(row => row.map(value => value.toString()))
}
if(operation === "rotateMatrix"){
endValue = rotateMatrix(num1, calcMatrix1, angleMode).map(row => row.map(value => value.toString()))
}
if(operation === "addMatrix"){
endValue = addMatrix(calcMatrix1, calcMatrix2).map(row => row.map(value => value.toString()))
}
if(operation === "subtractMatrix"){
endValue = subtractMatrix(calcMatrix1, calcMatrix2).map(row => row.map(value => value.toString()))
}
else{
endValue = "Error: operation not recognised";
}
return(endValue)
}