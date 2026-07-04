function findOffender(arr) {
  let index = 0;

  while (arr[index] < arr[index+1]) {
      index++
  }

  return arr[index + 1] < arr[index - 1] ? index+1 : index
}
