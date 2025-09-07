const response = await fetch("https://mocki.io/v1/2a2e6825-c13b-460f-a88a-4b937fedc13f")
const data = await response.json()


const productDom = document.getElementById("product")
const searchProductDom = document.getElementById("searchProduct")
const sortDom = document.getElementById("sort")
const sortPriceDom = document.getElementById("sortByPrice")

function renderProducts(products) {
    productDom.innerHTML = ""
    products.forEach(product => {
        const item = document.createElement("div")
        item.innerHTML = `${product.productId}  ${product.productName} : ${product.productPrice} บาท`
        productDom.appendChild(item)
    })
}

renderProducts(data)

searchProductDom.addEventListener("input", (e) => {
    const keyword = e.target.value
    const filterd = filterProduct(keyword)
    renderProducts(filterd)
})

function filterProduct(keyword) {
    return data.filter(x =>
        x.productName.toLowerCase().includes(keyword.toLowerCase())
    )
}

let sortState = false

function sortByName() {
    sortState = !sortState
    if (sortState) {
        const sorted = [...data].sort((a, b) =>
            a.productName.localeCompare(b.productName)
        )
        renderProducts(sorted)
    } else {
        renderProducts(data)
    }
}

let sortPriceState = false

function sortByPrice() {
    sortPriceState = !sortPriceState
    if (sortPriceState) {
        const sorted = [...data].sort((a, b) =>
            a.productPrice - b.productPrice
        )
        renderProducts(sorted)
    } else {
        renderProducts(data)
    }
}

sortDom.addEventListener("change", sortByName)
sortPriceDom.addEventListener("change", sortByPrice)



