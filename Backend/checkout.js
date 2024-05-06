document.addEventListener("DOMContentLoaded", function() {
    const pickupDeliverySelect = document.getElementById("pickup-delivery");
    const deliveryAddressDiv = document.getElementById("delivery-address");
    const checkoutForm = document.getElementById("checkout-form");
    const totalSpan = document.getElementById("total");

    
    const params = new URLSearchParams(window.location.search);
    const total = params.get('total');
    totalSpan.textContent = total;

    pickupDeliverySelect.addEventListener("change", function() {
        if (this.value === "delivery") {
            deliveryAddressDiv.style.display = "block";
        } else {
            deliveryAddressDiv.style.display = "none";
        }
    });

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert('Order submitted successfully!');
        window.location.href = "/";
    });
});
