function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // обновляем минимальное значение
    }

    if (arr[i] > max) {
      max = arr[i]; // обновляем максимальное значение
    }
  }

  const sumArray = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  sum
);
let avg1 = sumArray/arr.length
let avg2 = avg1.toFixed(2)
let avg = Number(avg2)

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
