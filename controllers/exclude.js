export const exclude = (data, rule) => {
  if (!data || !rule || !rule.exclude || !Array.isArray(rule.exclude)) {
    throw new Error(
      'Invalid input data or rule: "exclude" parameter is missing or not an array'
    )
  }
  let filteredData = [...data]
  if (rule.exclude) {
    for (let i = 0; i < rule.exclude.length; i++) {
      const excludeKey = Object.keys(rule.exclude[i])[0]
      const excludeValue = rule.exclude[i][excludeKey]
      filteredData = filteredData.filter(
        (obj) => obj[excludeKey] !== excludeValue
      )
    }
  }
  return filteredData
}
