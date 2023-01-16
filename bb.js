/* loại phòng
số phòng
đơn giá phòng 1ngay/1dem
số ngày ở
phụ thu
giảm giá
thành tiền */

class Hotel {
    constructor(name, price, day, surcharge, discount) {
        this.name = name;
        this.price = price;
        this.day = day;
        this.surcharge = surcharge;
        this.discount = discount;
    }
    getAmount() {
        return (1 - this.discount) * this.price * this.day;
    }
    getDiscount() {
        return `${this.discount * 100}%`;
    }
}

let bill = [
    new Hotel("High-class", 500000, 2, 200000, 0.1),
    new Hotel("Normal", 300000, 3, 150000, 0.05),
    new Hotel("President", 2000000, 5, 1500000, 0.15)
]

/* for (i = 0; i < bill.length; i++){
    console.log(`${bill[i].name}\t\t${bill[i].price}\t\t${bill[i].day}\t\t${bill[i].surcharge}\t\t${bill[i].getDiscount()}\t\t${bill[i].getAmount()}`);
} */

function renderBill() {
    let tbBill = document.getElementById('bill');
    let totalAmount = 0;
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
}
renderBill()

