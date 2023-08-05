export const sortData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(
      'Invalid input data: "data" parameter is missing or not an array'
    )
  }

  const sortedData = [...data]

  const keys = Array.from(
    new Set(sortedData.flatMap((obj) => Object.keys(obj)))
  )

  return sortedData.sort((a, b) => {
    for (const key of keys) {
      if (a[key] < b[key]) {
        return -1
      }
      if (a[key] > b[key]) {
        return 1
      }
    }
    return 0
  })
}
