'use strict'
const solveEquation = (a, b, c) => {
  let start = b ** 2 - 4 * a * c
  if (start < 0) {
    return []
  }
  if (start === 0) {
    return [-b / (2 * a)]
  }
  if (start > 0) {
    let first = (-b + Math.sqrt(start)) / (2 * a)
    let second = (-b - Math.sqrt(start)) / (2 * a)
    return [first, second]
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  parseFloat(percent,contribution,amount,countMonths)
 
  if (isNaN(percent)){
    return `Параметр ${"'Процентая ставка'"} содержит неправильное значение ${percent}`
  }
  if (isNaN(contribution)){
    return `Параметр ${"'Сумма первоначального взноса'"} содержит неправильное значение ${contribution}`
  }
  if (isNaN(amount)){
    return `Параметр ${"'Cумма кредита'"} содержит неправильное значение ${amount}`
  }
  if (isNaN(countMonths)){
    return `Параметр ${"'Срок(в месяцaх)'"} содержит неправильное значение ${countMonths}`
  }

  let amount1 = amount-contribution
  let percent1 = percent/100/12
  let monthlyPayment = amount1 * (percent1+(percent1 / (((1+percent1)**countMonths)-1))) /*Ежемесячный платеж*/
  let totalPayment = monthlyPayment * countMonths
 
  return totalPayment.toFixed(2)
}


