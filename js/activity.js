$(document).ready(function () {
  // Add click event listener to all table cells
  $("table td").on("click", function () {
    // Check if the clicked cell is "Not Available"
    if ($(this).text().trim() !== "Not Available") {
      // Toggle the "selected" class
      $(this).toggleClass("selected");
    }
  });
});
