function getFrequency(str) {
  return Array.from(str).reduce(
    (accumulator, current) => {
      if (current in accumulator) {
        accumulator[current]++
      } else {
        accumulator[current] = 1
      }
      return accumulator
    }, {}
  )
}
