// Function to handle form submission
function submitForm() {
  const form = document.getElementById('query-form'); // Replace 'query-form' with your form ID
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbysuMoiGAtJ4_TX7tXen7HPaPMt26AFQCImoxKdV54/dev", {
      method: "POST",
      body: formData,
  })
  .then((response) => response.text())
  .then((data) => {
      console.log(data);
      // Handle the response from the server as needed

      // Reload the page to start with a new form
      location.reload();
  })
  .catch((error) => {
      console.error("Error:", error);
  });
}

// Add a listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('query-form'); // Replace 'query-form' with your form ID
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm(); // Call the submitForm function to handle the submission
  });
});
