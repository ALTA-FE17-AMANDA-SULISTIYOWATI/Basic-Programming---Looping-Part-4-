const isPrima = (num: number): boolean => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const findNextPrima = (start: number): number => {
  let currentNum = start + 1
  while (!isPrima(currentNum)) {
    currentNum++
  }
  return currentNum
}

const primaSegiempat = (
  height: number,
  width: number,
  start: number
): number => {
  let currentNum = findNextPrima(start)
  let totalPrimes = 0

  for (let i = 0; i < height; i++) {
    let row = ""
    for (let j = 0; j < width; j++) {
      row += `${currentNum} `
      totalPrimes += currentNum
      currentNum = findNextPrima(currentNum)
    }
    console.log(row.trim())
  }

  return totalPrimes
}

console.log(primaSegiempat(2, 3, 13))
console.log(primaSegiempat(5, 2, 1))
