
let priceElements = document.querySelectorAll(".product_price_b");
let countElements = document.querySelectorAll(".product_count_b");
let totalPriceWithoutDiscount = 0;

for (let i = 0; i < priceElements.length; i++) {
    let price = parseFloat(priceElements[i].textContent.replace(/[^0-9.-]+/g, ""));
    let count = parseInt(countElements[i].textContent);
    totalPriceWithoutDiscount += price * count;
}

let discountPercentage = 10; 

function calculateDiscountAmount(price, discountPercentage) {
    return price * (discountPercentage / 100);
}


let totalDiscountAmount = 0;


for (let i = 0; i < priceElements.length; i++) {
    let price = parseFloat(priceElements[i].textContent.replace(/[^0-9.-]+/g, ""));
    let count = parseInt(countElements[i].textContent);
    totalDiscountAmount += calculateDiscountAmount(price * count, discountPercentage);
}

let totalPrice = totalPriceWithoutDiscount - totalDiscountAmount;
let resultElement = document.createElement("div");
resultElement.classList.add("cart-details");
resultElement.innerHTML = `
    <div class="total-price">
        <span class="label">4-и товари на суму</span>
        <span class="value1">${totalPriceWithoutDiscount.toFixed(2)} грн</span>
    </div>
    <div class="discount">
        <span class="label">Знижка</span>
        <span class="value2">${totalDiscountAmount.toFixed(2)} грн</span>
    </div>
    <div class="final-price">
        <span class="label">Загальна сума</span>
        <span class="value3">${totalPrice.toFixed(2)} грн</span>
    </div>
`;

document.body.appendChild(resultElement);