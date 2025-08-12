import { data } from "./data.js"

function filterProduct(keyword) {
    const result = data.filter(x => 
        x.productName.toLowerCase().includes(keyword.toLowerCase())
    )
    return result
}

let keyword = "SIT"
console.log(filterProduct(keyword))