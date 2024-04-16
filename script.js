document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("taxForm");
  const modal = document.getElementById("resultModal");
  const closeModal = document.querySelector(".close");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    calculateTax();
  });

  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
    const deductions = parseFloat(document.getElementById("deductions").value) || 0;
    const age = document.getElementById("age").value;

    let taxableIncome = income + extraIncome - deductions;
    let taxRate = 0;
    if (taxableIncome > 800000) {
      if (age === "<40") {
        taxRate = 0.3;
      } else if (age === "≥40 & <60") {
        taxRate = 0.4;
      } else if (age === "≥60") {
        taxRate = 0.1;
      }
    }
    let taxAmount = taxableIncome > 800000 ? (taxableIncome - 800000) * taxRate : 0;

    showModal(taxAmount);
  }

  function showModal(taxAmount) {
    const result = document.getElementById("result");
    result.innerHTML = `Tax Amount: ${taxAmount} Lakhs`;
    modal.style.display = "block";
  }
});
// JavaScript to handle close button click and modal display
document.getElementById('close').addEventListener('click', function() {
  this.classList.add('clicked'); // Add the 'clicked' class to style the close button
  setTimeout(() => {
    this.classList.remove('clicked'); // Remove the 'clicked' class after a short delay
  }, 300); // Adjust the delay as needed to match the transition duration

  // Hide the modal after a short delay
  setTimeout(() => {
    document.getElementById('resultModal').style.display = 'none';
  }, 300); // Adjust the delay to match the transition duration
});

// JavaScript to show the modal and center it after calculating the value
function showResultModal() {
  const modal = document.getElementById('resultModal');
  const modalContent = document.querySelector('.modal-content');
  
  // Add the 'show' class to display the modal content and center it
  modalContent.classList.add('show');
  modal.style.display = 'block';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
}
// Function to reset the form
function resetForm() {
  document.getElementById("taxForm").reset();
}

// Event listener for the "Calculate Tax" button
document.getElementById("taxForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Your tax calculation logic here...

  // Show the modal and calculate tax value
  showResultModal();

  // Reset the form
  resetForm();
});
// Function to show error icon and tooltip
function showErrorIconAndTooltip(inputId, tooltipId) {
  document.getElementById(inputId).classList.add("error");
  document.getElementById(tooltipId).style.display = "block";
}


