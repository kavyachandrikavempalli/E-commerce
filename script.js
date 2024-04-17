

// Function to display products on the page
function displayProducts() {
    const productsSection = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="product${product.id}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.querySelector(".cart-count");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(name, price);
            showSuccessMessage();
            updateCartCount(cartCount);
        });
    });

    updateCartCount(cartCount);
});

function addToCart(name, price) {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showSuccessMessage() {
    alert("Added to cart successfully");
}

function updateCartCount(cartCount) {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cartCount.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields
        if (!validateForm()) {
            return;
        }

        // Submit the form
        submitForm(contactForm);
    });
});

function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email");
        return false;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter your message");
        return false;
    }

    return true;
}

function submitForm(form) {
    // You can implement form submission logic here, such as sending an AJAX request or redirecting to another page
    // For now, let's log the form data to the console
    console.log("Form submitted successfully!");
    console.log("Name:", form.name.value);
    console.log("Email:", form.email.value);
    console.log("Message:", form.message.value);

    // Optionally, clear the form fields after submission
    form.reset();
}
