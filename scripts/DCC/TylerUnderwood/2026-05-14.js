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
