import { exclude } from "./exclude.js"
import { include } from "./include.js"
import { keyFilter } from "./keyFilter.js"
import { sortData as sort } from "./sortData.js"

const filterData = (data, rule) => {
  if (!Array.isArray(data) || !Array.isArray(rule)) {
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array")
    }
    if (!Array.isArray(rule)) {
      throw new Error("Rule is not an array")
    }
  }
  let result = [...data]
  result = include(result, rule)
  result = exclude(result, rule)
  return result
}

export function filterAndSortData(data, rule) {
  const filteredData = filterData(data, rule)
  const keyFilterData = keyFilter(filteredData, rule.sort_by)
  const sortData = sort(keyFilterData)
  return { result: sortData }
}
