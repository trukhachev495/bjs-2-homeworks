function getArrayParams (...arr) {
  if (!arr.length) {
    return 0
  }
  let min = arr[0]
  let max = arr[0]
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i] // обновляем минимальное значение
    }

    if (arr[i] > max) {
      max = arr[i] // обновляем максимальное значение
    }
  }

  const sumArray = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum
  )
  let avg1 = sumArray / arr.length
  let avg2 = avg1.toFixed(2)
  let avg = Number(avg2)

  return { min: min, max: max, avg: avg }
}

function summElementsWorker (...arr) {
  if (!arr.length) {
    return 0
  }
  let sum = 0
  const sumArray = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum
  )
  return sumArray
}

function differenceMaxMinWorker (...arr) {
  if (!arr.length) {
    return 0
  }
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let difference = max - min
  return difference
}

function differenceEvenOddWorker (...arr) {
  if (!arr.length) {
    return 0
  }
  let sumEvenElement = 0
  let sumOddElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i] // суммируем четные числа
    } else {
      sumOddElement += arr[i] // суммируем нечетные числа
    }
  }

  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker (...arr) {
  if (!arr.length) {
    return 0
  }
  let sumEvenElement = 0
  let countEvenElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i] // суммируем четные числа
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = [0]

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])

    if (result > maxWorkerResult) {
      maxWorkerResult = result
    }
  }

  return maxWorkerResult
}
