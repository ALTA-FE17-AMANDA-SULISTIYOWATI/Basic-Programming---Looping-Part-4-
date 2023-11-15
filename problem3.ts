function isPrime(num: number): boolean {
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

function generatePrimesAfter(start: number, count: number): number[] {
  const primes: number[] = []
  let num = start
  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num)
    }
    num++
  }
  return primes
}

function primaSegiempat(high: number, wide: number, start: number): void {
  const matrix: number[][] = []
  let currentNumber = generatePrimesAfter(start, wide)[0]

  for (let i = 0; i < high; i++) {
    const row = generatePrimesAfter(currentNumber, wide)
    matrix.push(row)
    currentNumber = row[row.length - 1] + 1
  }

  matrix.forEach((row) => {
    console.log(row.join(" "))
  })

  const totalSum: number = matrix.reduce(
    (acc, row) => acc + row.reduce((rowSum, num) => rowSum + num, 0),
    0
  )
  console.log(totalSum)
}

primaSegiempat(2, 3, 13)
primaSegiempat(5, 2, 1)
