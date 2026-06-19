const validUserRoles = ['user', 'creator', 'moderator', 'staff', 'admin']

const validUserSchema = {
  username: 'string',
  posts: 'number',
  verified: 'boolean',
  role: 'string', // validUserRoles
  supporter: 'boolean', // ?
  badges: 'array' // string[]
}

const optionalKeys = ['supporter']

let testIteration = 0

function isValidSchema(obj) {
  testIteration++
  console.log(`%c Test ${testIteration}.`, 'font-size: 14px;')

  const validKeys = Object.keys(validUserSchema)
  const requiredKeys = validKeys.filter(key => !optionalKeys.includes(key))

  // Quick check for all required keys
  let hasRequiredKeys = true
  let i = 0
  // While loop lets us break out after first error
  while (hasRequiredKeys && i < requiredKeys.length) {
    let key = requiredKeys[i]

    // If missing key, mark it and break out
    if (!obj.hasOwnProperty(key)) {
      console.warn('Missing key:', key)
      hasRequiredKeys = false
      continue
    }

    i++
  }

  if (!hasRequiredKeys) return false

  // This checks for first level types. We can be more detailed after
  let hasValidTypes = true
  i = 0
  while (hasValidTypes && i < validKeys.length) {
    const key = validKeys[i]
    const currentType = typeof obj[key]
    const expectedType = validUserSchema[key]

    // Up the iteration early, to break when exception found
    i++

    // If missing optional key, continue
    if (currentType === 'undefined' && optionalKeys.includes(key)) {
      continue
    }

    // If expected array and is array, continue
    if (expectedType === 'array' && Array.isArray(obj[key])) {
      continue
    }

    // If invalid type, mark it and break out
    if (currentType !== expectedType) {
      console.warn('Invalid', key, 'typeof:', currentType, '\n  Expected:', expectedType)
      hasValidTypes = false
      continue
    }
  }

  if (!hasValidTypes) return false

  if (!validUserRoles.find(role => role === obj.role)) {
    console.warn('Not a valid user role:', obj.role)
    return false
  }

  const oopsAllStrings = (arr) => {
    let isAllStrings = true
    let i = 0
    while (isAllStrings && i < arr.length) {
      // If item is not a string, mark it and break out
      if (typeof arr[i] !== 'string') {
        isAllStrings = false
        continue
      }
      i++
    }
    return isAllStrings
  }
  if (!oopsAllStrings(obj.badges)) return false

  // WOW you made it the whole way through! Here is your prize
  return true
}
