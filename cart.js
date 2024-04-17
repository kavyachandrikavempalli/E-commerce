document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    displayCartItems(cartItems);
});

function displayCartItems(cartItems) {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cartItems.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart</p>";
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    displayCartItems(cartItems);

    clearCartButton.addEventListener("click", function() {
        clearCart();
        displayCartItems(cartItems);
    });
});

// function displayCartItems(cartItems) {
//     let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
//     cartItems.innerHTML = ""; // Clear previous items

//     if (cart.length === 0) {
//         cartItems.innerHTML = "<p>No items in cart</p>";
//     } else {
//         cart.forEach(item => {
//             const li = document.createElement("li");
//             li.textContent = `${item.name} - $${item.price}`;
//             cartItems.appendChild(li);
//         });
//     }
// }

function clearCart() {
    localStorage.removeItem("cart");
}