function migrateRecord(schema, record) {
  const result = { ...record };

  for (const [key, value] of Object.entries(schema)) {
    if (!(key in result)) {
      result[key] = value;
    }
  }

  return result;
}
