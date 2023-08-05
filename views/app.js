import data from "../data/data.json" assert { type: "json" }
import condition from "../data/condition.json" assert { type: "json" }

import { filterAndSortData } from "../controllers/filter.js"

const result = filterAndSortData(data.data, condition.condition)
console.log(JSON.stringify(result))
