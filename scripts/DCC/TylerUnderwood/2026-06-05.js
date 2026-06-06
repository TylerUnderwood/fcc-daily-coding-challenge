const validUserRoles = ['user', 'creator', 'moderator', 'staff', 'admin']

const validUserSchema = {
  username: 'string',
  posts: 'number',
  verified: 'boolean',
  role: validUserRoles,
  supporter: 'boolean', // ?
  badges: 'array' // string[]
}

let testIteration = 0

function isValidSchema(obj) {
  testIteration++
  console.log(`%c Test ${testIteration}.`, 'font-size: 14px;')

  const validKeys = Object.keys(validUserSchema)
  let hasValidKeys = true

  let i = 0
  while (i < validKeys.length && hasValidKeys) {
    let key = validKeys[i]
    i++

    // Skip if optional key
    if (key === 'supporter') continue

    if (!obj.hasOwnProperty(key)) {
      console.warn('Missing key:', key)
      hasValidKeys = false
    }
  }

  if (!hasValidKeys) return false

  const invalidTypeOfWarn = (key, invalidType, expectedType) => {
    console.warn('Invalid', key, 'typeof:', invalidType, '\n  Expected:', expectedType)
  }

  const simpleTypeValidation = (key) => {
    const currentType = typeof obj[key]
    const expectedType = validUserSchema[key]

    if (currentType !== expectedType) {
      invalidTypeOfWarn(key, currentType, expectedType)
      return false
    }
    return true
  }
  if (!simpleTypeValidation('username')) return false
  if (!simpleTypeValidation('posts')) return false
  if (!simpleTypeValidation('verified')) return false

  const roleValidation = (role) => {
    if (typeof role !== 'string') {
      invalidTypeOfWarn('role', typeof role, 'string')
      return false
    }

    if (!validUserRoles.find(role => role === obj.role)) {
      console.warn('Not a valid user role:', obj.role)
      return false
    }

    return true
  }
  if (!roleValidation(obj.role)) return false

  if (obj.hasOwnProperty('supporter')) {
    if (!simpleTypeValidation('supporter')) return false
  }

  const oopsAllStrings = (arr) => {
    let isAllStrings = true
    let i = 0
    while (isAllStrings && i < arr.length) {
      if (typeof arr[i] !== 'string') {
        isAllStrings = false
        return false
      }
      i++
    }

    return true
  }
  if (Array.isArray(obj.badges)) {
    if (!oopsAllStrings(obj.badges)) return false
  } else {
    invalidTypeOfWarn('badges', typeof obj.badges, 'array')
    return false
  }

  // WOW you made it the whole way though! Here is your prize
  return true
}
