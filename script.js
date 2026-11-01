// 1. Get the order form and the message elements
const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

// 2. Gloria's Catering WhatsApp number
const businessWhatsApp = "2348082176998";

// 3. Get the product dropdown and custom product field
const productSelect = document.getElementById("product");
const customProductGroup = document.getElementById("customProductGroup");
const customProductInput = document.getElementById("customProduct");

// 4. Show the custom product field when "Other" is selected
productSelect.addEventListener("change", function () {
  const isOther = productSelect.value === "Other";

  customProductGroup.hidden = !isOther;
  customProductInput.required = isOther;

  if (!isOther) {
    customProductInput.value = "";
  }
});

// 5. Handle form submission
orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the customer's information
  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const selectedProduct = productSelect.value;
  const quantity = document.getElementById("quantity").value;
  const unit = document.getElementById("unit").value;
  const address = document.getElementById("address").value.trim();
  const instructions = document.getElementById("notes").value.trim();

  // Use the custom product name when "Other" is selected
  const product =
    selectedProduct === "Other"
      ? customProductInput.value.trim()
      : selectedProduct;

  // Build the order message
  let message =
    "Hello Gloria's Catering Services! I would like to place an order.\n\n" +
    "CUSTOMER DETAILS\n" +
    "Name: " +
    customerName +
    "\n" +
    "Phone: " +
    customerPhone +
    "\n\n" +
    "ORDER DETAILS\n" +
    "Product: " +
    product +
    "\n" +
    "Quantity: " +
    quantity +
    " " +
    unit +
    "\n" +
    "Delivery Address: " +
    address;

  if (instructions !== "") {
    message += "\nAdditional Instructions: " + instructions;
  }

  message += "\n\nPlease confirm the price and availability. Thank you!";

  // Convert the message into a WhatsApp link
  const whatsappURL =
    "https://wa.me/" +
    businessWhatsApp +
    "?text=" +
    encodeURIComponent(message);

  // Inform the customer and open WhatsApp
  formMessage.textContent =
    "Opening WhatsApp with your order details. Please review and send your message.";

  window.open(whatsappURL, "_blank");
});
