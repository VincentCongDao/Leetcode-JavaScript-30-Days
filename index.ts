function createCounter(n: number): () => number {
  let currentNumber = n;
  return function () {
    return currentNumber++;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
