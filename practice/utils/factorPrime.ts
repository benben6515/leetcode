function factorPrime(n: number) {
  let result = ''
  let current = 2

  while (current <= n) {
    if (n % current === 0) {
      result += `${current} X `
      n = n / current
    } else {
      current++
    }
  }
  return result.slice(0, result.length - 3)
}

// test
console.log(factorPrime(120))
console.log(factorPrime(2343))
console.log(factorPrime(1234))
console.log(factorPrime(9999))
