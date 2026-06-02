function isValidSchema(obj) {
  if (!obj.hasOwnProperty('username')) return false
  if (typeof obj.username !== 'string' ) return false
  if (!obj.hasOwnProperty('posts')) return false
  if (typeof obj.posts !== 'number' ) return false
  if (!obj.hasOwnProperty('verified')) return false
  if (typeof obj.verified !== 'boolean' ) return false
  return true
}
