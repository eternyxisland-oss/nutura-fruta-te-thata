let selectedProduct = "";
let selectedPrice = 0;

function openOrder(name, price) {
    selectedProduct = name;
    selectedPrice = price;
    document.getElementById("productName").innerText = name;
    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

function sendOrder() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;

    alert("Porosia u dërgua! (Duhet të lidhësh EmailJS për funksionim real)");
}

function payWithCard() {
    alert("Lidhe Stripe për pagesë reale me kartë.");
}


