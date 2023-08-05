export const keyFilter = (data, keys) => {
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    !Array.isArray(keys) ||
    keys.length === 0
  ) {
    throw new Error(
      'Invalid input data or keys: "data" or "keys" parameter is missing or not an array'
    )
  }
  const filteredData = [...data]

  return filteredData.filter((obj) => {
    for (const key of keys) {
      if (!Object.keys(obj).includes(key)) {
        return false
      }
    }
    return true
  })
}
