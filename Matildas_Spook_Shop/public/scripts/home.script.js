document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".proizvod");

    buttons.forEach(button => {
        button.addEventListener("click", async (e) => {
            const productId = e.currentTarget.dataset.productId;

            try {
                const response = await fetch(`/home/addToCart/${productId}`, { method: "POST" });
                const result = await response.json();

                if (result.success) {
                    updateCartBadge(result.kosarica);

                    const wrapper = button.querySelector(".slika-wrapper");
                    let indicator = wrapper.querySelector(".quantity-indicator");

                    const newQty = result.kosarica[productId];

                    if (indicator) {
                        indicator.textContent = newQty;
                    } else {
                        indicator = document.createElement("div");
                        indicator.className = "quantity-indicator";
                        indicator.textContent = newQty;
                        wrapper.appendChild(indicator);
                    }
                } else {
                    alert("Error adding to cart");
                }
            } catch (err) {
                console.error("Network or server error", err);
            }
        });
    });
});

// Example utility functions
function updateCartBadge(kosarica) {
    let countElement = document.querySelector('.cart-count');
    const totalCount = Object.values(kosarica).reduce((sum, qty) => sum + qty, 0);

    if (!countElement) {
        // Create the element only if it doesn't exist
        countElement = document.createElement("div");
        countElement.className = "cart-count";
        const cartButton = document.getElementById("Botun_za_košaru");
        if (cartButton) cartButton.appendChild(countElement);
    }

    countElement.style.display = totalCount > 0 ? "flex" : "none";
    countElement.textContent = totalCount;
}

