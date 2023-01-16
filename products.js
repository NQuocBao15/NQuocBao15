class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}

let display = [
    new Product ("Sony Xperia", 7000000),
    new Product ("Samsung", 5000000),
    new Product ("Nokia 6", 4500000)
]

/* function addProduct() {
    
    for (i = 0; i < bill.length; i++){
        tbBill.innerText += `
    <tr>
        <td>${bill[i].name}</td>
        <td>${bill[i].price}</td>
        <td>${bill[i].day}</td>
        <td>${bill[i].surcharge}</td>
        <td>${bill[i].getDiscount()}</td>
        <td>${bill[i].getAmount()}</td>
    </tr>
    `
    }
} */



/* let display = [
    new Product (document.getElementById('name'), document.getElementById('price')),
]

function addProduct() {
    let displayProduct = document.getElementById('display')
    displayProduct.innerText = `
    <tr>
    <td>document.getElementById('name').innerText = "alo"</td>
    <td>Price</td>
    <td><button id="edit" onclick="editProduct()">Edit</button></td>
    <td><button id="delete" onclick="deleteProduct()">Delete</button></td>
    </tr>
    `   
}
addProduct(); */