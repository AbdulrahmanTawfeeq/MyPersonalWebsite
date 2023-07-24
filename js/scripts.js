window.onload = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the placeholder in the HTML with the current year
  document.getElementById("currentYear").textContent = currentYear;
};
