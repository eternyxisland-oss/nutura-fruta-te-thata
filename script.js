let total = 0;

function addToCart(name, price) {
    const cartList = document.getElementById("cart-list");
    const item = document.createElement("li");
    item.textContent = name + " - " + price + "€";
    cartList.appendChild(item);

    total += price;
    document.getElementById("total").textContent = "Totali: " + total + "€";
}
