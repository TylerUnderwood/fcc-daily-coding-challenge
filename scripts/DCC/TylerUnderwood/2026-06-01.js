function isValidSchema(obj) {
  if (!obj.hasOwnProperty('username')) return false
  if (typeof obj.username !== 'string' ) return false
  return true
}
