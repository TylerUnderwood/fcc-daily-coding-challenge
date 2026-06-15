// 2026-05-15
function sleepDebt(hoursSlept, targetHours) {
  let debtHours = targetHours;

  hoursSlept.forEach(sleepHours => {
    debtHours += targetHours - sleepHours
  })

  return debtHours > 0 ? debtHours : 0;
}

console.log('01.', sleepDebt([6, 6, 6, 6, 6, 6], 8))
console.log('02.', sleepDebt([6, 7, 8, 4, 8, 6], 7))
console.log('03.', sleepDebt([10, 10, 9, 10, 9, 11], 9))
console.log('04.', sleepDebt([8, 7, 6, 7, 6, 8], 6))
console.log('05.', sleepDebt([8, 9, 10, 9, 10, 7], 7))


// NOT COMPLETE
function isMirrorImage(str1, str2) {
  const arr1 = Array.from(str1)
  const arr2 = Array.from(str1)
  let arrLength = 0;

  if (arr1.length !== arr2.length) {
    console.log("LENGTH NOT MATCH")
    return false
  } else {
    arrLength = arr1.length
  }

  for (let i = 0; i < arrLength; i++) {
    if (arr1[i] !== arr2[arrLength - i - 1]) {
      console.log(arr1[i], "!==", arr2[arrLength - i - 1])
      return false
    }
  }

  return true
}

console.warn(isMirrorImage("[HOW]", "[WOH]"))
