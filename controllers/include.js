export const include = (data, rule) => {
  if (!data || !rule || !rule.include || !Array.isArray(rule.include)) {
    throw new Error(
      'Invalid input data or rule: "include" parameter is missing or not an array'
    )
  }

  let filteredData = [...data]
  if (rule.include) {
    for (let i = 0; i < rule.include.length; i++) {
      const includeKey = Object.keys(rule.include[i])[0]
      const includeValue = rule.include[i][includeKey]
      filteredData = filteredData.filter(
        (obj) => obj[includeKey] === includeValue
      )
    }
  }
  return filteredData
}
