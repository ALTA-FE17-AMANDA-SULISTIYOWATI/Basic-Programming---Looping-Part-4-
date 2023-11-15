function fibonacci(n: number): number {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(9))
console.log(fibonacci(10))
console.log(fibonacci(12))
