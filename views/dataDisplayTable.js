import data from "../data/data.json" assert { type: "json" }
import condition from "../data/condition.json" assert { type: "json" }
import { filterAndSortData } from "../controllers/filter.js"

const { result } = filterAndSortData(data.data, condition.condition)
const dataBody = document.getElementById("data-body")

result.forEach((item) => {
  const row = document.createElement("tr")
  const nameCell = document.createElement("td")
  const emailCell = document.createElement("td")
  const ratingCell = document.createElement("td")

  nameCell.textContent = item.name
  emailCell.textContent = item.email
  ratingCell.textContent = item.rating

  row.appendChild(nameCell)
  row.appendChild(emailCell)
  row.appendChild(ratingCell)

  dataBody.appendChild(row)
})
