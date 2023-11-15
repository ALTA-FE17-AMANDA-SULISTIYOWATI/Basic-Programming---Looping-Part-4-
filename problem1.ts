function primeNumber(number: number): boolean {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

function primeX(n: number): number | null {
  const primeList: number[] = []
  let num = 2
  while (primeList.length < n) {
    if (primeNumber(num)) {
      primeList.push(num)
    }
    num++
  }
  return primeList.length > 0 ? primeList[primeList.length - 1] : null
}

console.log(primeX(1))
console.log(primeX(5))
console.log(primeX(10))
console.log(primeX(15))
console.log(primeX(20))
