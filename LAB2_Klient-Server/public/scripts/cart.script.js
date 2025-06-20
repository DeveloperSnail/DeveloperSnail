document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("Product-container");

    productContainer.addEventListener("click", async (e) => {
        const target = e.target;

        if (target.classList.contains("plus") || target.classList.contains("minus")) {
            const productId = target.dataset.id;
            const action = target.classList.contains("plus") ? "add" : "remove";

            try {
                const response = await fetch(`/cart/${action}/${productId}`, {
                    method: "POST",
                });

                const result = await response.json();

                console.log("Response JSON:", result);

                if (result.success) {
                    const quantityControlDiv = target.parentElement;           
                    const cartRow = quantityControlDiv.parentElement;       
                    const qtySpan = cartRow.querySelector(".quantity");

                    if (result.newQty === 0) {
                        cartRow.remove();
                    } else {
                        qtySpan.textContent = result.newQty; 
                    } 
                } else {
                    alert("Error uupdating cart");
                }
            } catch (err) {
                console.error("Error communicating with server:", err);
            }
        }
    });
});