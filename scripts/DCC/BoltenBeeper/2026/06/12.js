// Create a new string using filter method.
function extractContent(html) {
  let insideTag = false

  // Filter out any characters inside "<>" including the "<>".
  let insideText = html.split("").filter((char) => {
    if (char == "<") {
      insideTag = true
      return false
    } else if (char == ">") {
      insideTag = false
      return false
    } else if (insideTag === false) {
      return true
    }
  })
  .join("")

  console.log(insideText)
  return insideText;
}

extractContent('<p>hello world</p>')