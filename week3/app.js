// import { data } from './data.js'

const response = await fetch("https://68bd7e0a227c48698f84a485.mockapi.io/api/product/products")
const data = await response.json()


const productDom = document.getElementById("product")
const searchProductDom = document.getElementById("searchProduct")

function renderProducts(products) {
    productDom.innerHTML = ""
    products.forEach(product => {
        const item = document.createElement("div")
        item.innerHTML = `${product.productName} - ${product.productPrice} บาท`
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


