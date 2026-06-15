function fizzBuzzCount(start, end) {
  let count = { fizz: 0, buzz: 0 }

  for (let i = start; i <= end; i++) {
    const isFizz = !Boolean(i % 3)
    const isBuzz = !Boolean(i % 5)

    if(!(isFizz || isBuzz)) {
      continue
    } else {
      isFizz ? count.fizz++ : null
      isBuzz ? count.buzz++ : null
    }
  }

  return count;
}
