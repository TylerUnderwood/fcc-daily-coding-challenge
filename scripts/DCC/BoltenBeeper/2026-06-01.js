function isValidSchema(obj) {
  return (obj.username != undefined &&
  typeof(obj.username) == "string")
    ? true
    : false;
}