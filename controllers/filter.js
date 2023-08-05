import { exclude } from "./exclude.js"
import { include } from "./include.js"
import { keyFilter } from "./keyFilter.js"
import { sortData as sort } from "./sortData.js"

export function filterAndSortData(data, rule) {
  if (!Array.isArray(data)) {
    throw new Error("Data is not an array")
  }
  if (!Array.isArray(rule.include)) {
    throw new Error("Include rule  is not an array")
  }
  if (!Array.isArray(rule.exclude)) {
    throw new Error("Exclude rule is not an array")
  }

  let result = [...data]

  result = include(result, rule)
  result = exclude(result, rule)

  const keyFilterData = keyFilter(result, rule.sort_by)
  const sortData = sort(keyFilterData)

  return { result: sortData }
}
