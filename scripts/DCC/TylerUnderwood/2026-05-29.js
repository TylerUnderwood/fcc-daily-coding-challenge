function getWiderAspectRatio(a, b) {
  // 1. Convert ratios to tuple arrays, acting as fractions
  //    eg. [numerator, denominator] or [width, height]
  let ratioA = a.split("x")
  let ratioB = b.split("x")

  // Find Greatest Common Divisor
  const findGCD = (x, y) => {
    return y ? findGCD(y, x % y) : x;
  }

  // Use GCD for a reduced fraction array
  const reduceRatio = (x, y) => {
    const gcd = findGCD(x, y)

    return [x/gcd, y/gcd]
  }

  // 2. Reduce initial ratios
  ratioA = reduceRatio(ratioA[0], ratioA[1])
  ratioB = reduceRatio(ratioB[0], ratioB[1])

  // 3. Cross multiply to find proportional numerator (width)
  const numeratorA = ratioA[0] * ratioB[1]
  const numeratorB = ratioA[1] * ratioB[0]

  // 4. Compare proportional widths to get widest ratio
  if (numeratorA > numeratorB) {
    return ratioA.join(":")
  } else {
    return ratioB.join(":")
  }
}
